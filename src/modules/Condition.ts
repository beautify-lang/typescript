interface ConditionInterface<ExpectedOutputType> {
  readonly label: string;
  readonly log: (...args: any[]) => void;
  readonly eo: ExpectedOutputType;
  readonly statement: () => unknown;
  readonly lT: boolean;
};

export class Condition<ExpectedOutputType> implements ConditionInterface<ExpectedOutputType> {
  readonly label: string;
  readonly log: (...args: any[]) => void;
  readonly eo: ExpectedOutputType;
  readonly statement: () => unknown;
  readonly lT: boolean;

  constructor(
    cb: () => unknown, 
    expectedOutput: ExpectedOutputType, 
    label: string, 
    logger: (...args: any[]) => void = console.warn,
    logTimestamp: boolean = true
  ) {
    this.statement = cb;
    this.eo = expectedOutput;
    this.label = label;
    this.log = logger;
    this.lT = logTimestamp;
  };

  fails(): boolean {
    return this.statement() !== this.eo;
  };

  passes(): boolean {
    const out = this.statement();
    if (out !== this.eo) {
      this.log(
        `[@beautify-lang/ts${this.lT ? ` at ${new Date().toISOString().split(".")[0]!.replace("T", " ")}` : ""}]: Condition "${this.label}" failed. Given Callback returned ${JSON.stringify(out)}, expected output was ${JSON.stringify(this.eo)}`
      );
      return false;
    };
    return true;
  };
};

export const not = <T>(value: T): boolean => !value;