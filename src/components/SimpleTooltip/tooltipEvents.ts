export interface TooltipShowPayload {
  trigger: HTMLElement;
  message: string;
  offset?: number;
  shiftPadding?: number;
}

export interface TooltipUpdatePayload {
  message: string;
}

export type TooltipSubscription = ((
  param:
    | {
        type: 'show';
        payload: TooltipShowPayload;
      }
      | {
        type: 'update';
        payload: TooltipUpdatePayload;
      }
    | { type: 'hide', payload?: undefined },
) => void)

const TooltipEvents = () => {
  let subscriber:
    | TooltipSubscription
    | null = null;

  const subscribe = (subscription: TooltipSubscription) => {
    subscriber = subscription;
  }

  const unsubscribe = () => {
    subscriber = null;
  }

  const handleShow = (payload: TooltipShowPayload) => {
    if (subscriber) {
      subscriber({ type: 'show', payload });
    }
  }

  const handleUpdate = (payload: TooltipUpdatePayload) => {
    if (subscriber) {
      subscriber({ type: 'update', payload });
    }
  }

  const handleHide = () => {
    if (subscriber) {
      subscriber({ type: 'hide' });
    }
  }

  return {
    subscribe,
    unsubscribe,
    handleShow,
    handleUpdate,
    handleHide,
  };
};

export const { subscribe, unsubscribe, handleShow, handleUpdate, handleHide } = TooltipEvents();
