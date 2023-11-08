function getValue<O, T extends keyof O>(obj: O, key: T): O[T] {
  return obj[key];
}
