export type Evaluatable<T, C extends unknown[]> = T | ((...args: C) => T);

/**
 * Take a value or a function that returns a value and call it
 * with rest arguments if it is a function.
 * Example:
 * evaluate(value) -> value
 * evaluate(func, context) -> func(context)
 */
export function evaluate<T, C extends unknown[]>(valueOrFn: Evaluatable<T, C>): ((...args: C) => T) {
  return (...args: C) => {
    if (typeof valueOrFn === 'function') {
      return (valueOrFn as (...args: C) => T)(...args);
    }
    return valueOrFn;
  };
}
