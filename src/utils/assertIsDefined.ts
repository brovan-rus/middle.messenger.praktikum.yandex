function isDefined<T>(val: T): val is Exclude<T, undefined> {
  return val !== undefined;
}

export function assertIsDefined<T>(
  val: T,
  name = 'Value',
): asserts val is Exclude<T, undefined> {
  if (!isDefined(val)) {
    throw new TypeError(`${name} must be defined`);
  }
}
