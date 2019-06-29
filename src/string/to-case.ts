export function preCase(s: string): string {
  return !s.length ?
    '' :
    s.replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/([^A-Z])([A-Z])/g, (_, c0, c1) => {
        const cc1 = /[A-Za-z0-9]/.test(c0) ? `-${c1}` : c1;
        return `${c0}${cc1}`;
      })
      .toLowerCase();
}

export function postCase(s: string, delimiter: string = ''): string {
  return !s.length ? '' : s.replace(/[^a-zA-Z0-9]/g, delimiter);
}
