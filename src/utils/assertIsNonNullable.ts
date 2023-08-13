export function assertIsNonNullable<T>(
  val: T,
  name = 'Value',
): asserts val is NonNullable<T> {
  if (!isNonNullable(val)) {
    throw new TypeError(`${name} must be defined and not null`);
  }
}

export function isNonNullable<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}
