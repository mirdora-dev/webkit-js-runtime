export class JSCContext {
  constructor(public readonly id: string = 'jsc-core') {}
  evaluateScript(source: string): unknown {
    return eval(source);
  }
}
