export const querySelector = <E extends Element>(selectors: string, parent: Element = document.documentElement) => {
  const result = parent.querySelector<E>(selectors);
  if (result == null) {
    throw new Error(`Element not found: ${selectors}`);
  }
  return result;
}

export const querySelectorAll = <E extends Element>(selectors: string, parent: Element = document.documentElement) => parent.querySelectorAll<E>(selectors);

export const Dataset = (element: HTMLElement) => (key: string) => {
  const value = element.dataset[key];
  if (value == null) {
    throw new Error(`Data value not found: ${key}`);
  }
  return value;
}

export const dataValue = (key: string, element: HTMLElement) => Dataset(element)(key);