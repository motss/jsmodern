interface PrototypeStruct<T = (...params: any[]) => any> {
  isStatic?: boolean;
  label: string;
  fn: T;
}
