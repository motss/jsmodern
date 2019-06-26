export interface PrototypeStruct<T = (...params: any[]) => any> {
  label: string;
  function: T;
}
