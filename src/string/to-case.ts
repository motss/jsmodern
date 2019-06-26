export function preCase(s: string): string {
  return !s.length ? '' : s.replace(/(.)([A-Z])/g, (_, c0, c1) => {
    return `${c0.trim() ? '' : '-'}${c1}`;
  });
}

export function postCase(s: string, delimiter: string = ''): string {
  return !s.length ? '' : s.replace(/[^a-zA-Z0-9]/g, delimiter);
}
