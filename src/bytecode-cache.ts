export class BytecodeCache {
  private store = new Map<string, Uint8Array>();
  set(key: string, data: Uint8Array): void { this.store.set(key, data); }
  get(key: string): Uint8Array | undefined { return this.store.get(key); }
}
