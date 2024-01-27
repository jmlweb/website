import { arrow, computePosition, flip, offset, shift } from '@floating-ui/dom';

import { querySelector } from '@/pods/dom';

const Tooltip = (targetDocument: Document) => {
  const wrapperEl = querySelector<HTMLDivElement>(
    '#simple-tooltip',
    targetDocument,
  );
  const contentEl = querySelector<HTMLSpanElement>('.content', wrapperEl);
  const arrowEl = querySelector<HTMLSpanElement>('.arrow', wrapperEl);

  let timeout: number;

  return {
    show: (e: MouseEvent | FocusEvent) => {
      const trigger = e.target as HTMLButtonElement;
      clearTimeout(timeout);
      const tooltipText =
        trigger.dataset.tooltip ||
        trigger.querySelector('.sr-only')?.textContent;
      const config = {
        offset: Number(trigger.dataset.offset || 8),
        shiftPadding: Number(trigger.dataset.shiftPadding || 16),
      };

      if (!tooltipText) {
        return;
      }
      contentEl.textContent = tooltipText;

      computePosition(trigger, wrapperEl, {
        middleware: [
          offset(config.offset),
          flip(),
          shift({
            padding: config.shiftPadding,
          }),
          arrow({ element: arrowEl }),
        ],
      })
        .then(({ x, y, placement, middlewareData }) => {
          Object.assign(wrapperEl.style, {
            top: `${y}px`,
            left: `${x}px`,
          });

          const { arrow } = middlewareData;
          if (arrow == null) {
            return;
          }

          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
          }[placement.split('-')[0]]!;

          Object.assign(arrowEl.style, {
            left: arrow.x != null ? `${arrow.x}px` : '',
            top: arrow.y != null ? `${arrow.y}px` : '',
            right: '',
            bottom: '',
            [staticSide]: '-3px',
          });
        })
        .catch(() => {
          wrapperEl.hidden = true;
        });
      wrapperEl.hidden = false;
    },
    hide: () => {
      timeout = setTimeout(() => {
        wrapperEl.hidden = true;
      }, 150);
    },
  };
};

export const initializeTooltip = (targetDocument: Document) => {
  if (!window.matchMedia('(hover: hover)').matches) {
    return;
  }

  const triggers =
    targetDocument.querySelectorAll<HTMLElement>('[data-tooltip]');
  const tooltip = Tooltip(targetDocument);
  const LISTENERS = [
    ['mouseenter', tooltip.show],
    ['mouseleave', tooltip.hide],
    ['focus', tooltip.show],
    ['blur', tooltip.hide],
  ] as const;

  triggers.forEach((trigger) => {
    LISTENERS.forEach(([eventName, handler]) => {
      trigger.addEventListener(eventName, handler);
    });
  });
};
