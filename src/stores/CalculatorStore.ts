import { action, makeAutoObservable } from "mobx";
export class CalculatorStore {
  public currentOperand = "";
  public previousOperand = "";
  public operator: string | undefined = undefined;

  constructor() {
    makeAutoObservable(this, {
      clear: action.bound,
      delete: action.bound
    });
  }

  public clear(): void {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = undefined;
  }

  public append(number: string) {
    this.currentOperand = this.currentOperand.concat(number);
  }

  public delete() {
    this.currentOperand = this.currentOperand.substr(0, this.currentOperand.length - 1);
  }
}
