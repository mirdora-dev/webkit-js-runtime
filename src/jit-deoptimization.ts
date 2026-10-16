export function bailout(reason: string): void {
  console.warn('Deopt:', reason);
}
