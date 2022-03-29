export function scale(n: number, base = 8) {
  return n * base;
}

export function scalePx(n: number, base?: number) {
  return `${scale(n, base)}px`;
}