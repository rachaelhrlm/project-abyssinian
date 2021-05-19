import { action, makeAutoObservable } from "mobx";
export class CalculatorStore {
  public currentOperand = "";
  public previousOperand = "";
  public operator: string | undefined = undefined;

  constructor() {
    makeAutoObservable(this, {
      clear: action.bound,
      delete: action.bound,
      compute: action.bound
    });
  }

  public clear(): void {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operator = undefined;
  }

  public append(number: string): void {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand.concat(number);
  }

  public delete(): void {
    this.currentOperand = this.currentOperand.substr(0, this.currentOperand.length - 1);
  }

  public setOperator(operator: string): void {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") this.compute();
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.operator = operator;
  }

  public compute(): void {
    const currentOperand = parseFloat(this.currentOperand);
    const previousOperand = parseFloat(this.previousOperand);
    let answer: number;
    if (isNaN(currentOperand) || isNaN(previousOperand)) return;

    switch (this.operator) {
      case "+":
        answer = previousOperand + currentOperand;

        break;
      case "-":
        answer = previousOperand - currentOperand;
        break;
      case "*":
        answer = previousOperand * currentOperand;
        break;
      case "/":
        answer = previousOperand / currentOperand;
        break;
      default:
        answer = currentOperand;
    }
    this.currentOperand = answer.toString();
    this.previousOperand = "";
    this.operator = undefined;
  }

  public get displayOperator(): string | undefined {
    if (this.operator === "*") {
      return "x";
    } else if (this.operator === "/") {
      return "÷";
    } else {
      return this.operator;
    }
  }
}
