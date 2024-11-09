export const querySelector = <E extends Element>(selectors: string, parent: Element = document.documentElement) => {
  const result = parent.querySelector<E>(selectors);
  if (result == null) {
    throw new Error(`Element not found: ${selectors}`);
  }
  return result;
}

export const querySelectorAll = <E extends Element>(selectors: string, parent: Element = document.documentElement) => parent.querySelectorAll<E>(selectors);