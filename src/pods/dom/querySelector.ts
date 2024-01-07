export const querySelector = <E extends Element>(
  selector: string,
  container: HTMLElement | Document = document,
) => {
  const element = container.querySelector<E>(selector);
  if (!element) {
    throw new Error(`Element not found: ${selector}`);
  }
  return element;
};
