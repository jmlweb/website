export const querySelectorAll = <E extends Element>(
  selector: string,
  container: HTMLElement | Document = document,
) => {
  const elements = container.querySelectorAll<E>(selector);
  if (!elements.length) {
    throw new Error(`Element not found: ${selector}`);
  }
  return elements;
};
