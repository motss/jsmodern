export interface PrototypeStruct<T = (...params: any[]) => any> {
  label: string;
  fn: T;
}
