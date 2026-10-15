export interface HeapStats {
  size: number;
  capacity: number;
}
export function collectGarbage(): HeapStats {
  return { size: 1024 * 1024 * 4, capacity: 1024 * 1024 * 16 };
}
