export class MicrotaskQueue {
  private tasks: Function[] = [];
  drain(): void { while (this.tasks.length) this.tasks.shift()!(); }
}
