import { faWindowMaximize, faWindowMinimize, faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { action, makeAutoObservable } from "mobx";
export class CalculatorStore {
  public isHidden = false;
  public isMaximized = false;
  public currentOperand = "";
  public previousOperand = "";
  public operator: string | undefined = undefined;

  constructor() {
    makeAutoObservable(this, {
      close: action.bound,
      open: action.bound,
      clear: action.bound,
      delete: action.bound,
      compute: action.bound
    });
  }

  public close(): void {
    this.isHidden = true;
    this.clear();
  }
  public open(): void {
    this.isHidden = false;
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

  public getWindowButtonIcon(type: string): IconDefinition {
    switch (type) {
      case "minimize":
        return faWindowMinimize;
      case "maximize":
        if (this.isMaximized) return faWindowRestore;
        return faWindowMaximize;
      case "close":
      default:
        return faTimes;
    }
  }

  public getWindowButtonOnClick(type: string): React.MouseEventHandler<HTMLDivElement> {
    switch (type) {
      case "minimize":
        return () => {
          console.log("test");
        };
      case "maximize":
        if (this.isMaximized)
          return () => {
            console.log("test");
          };
        return () => {
          console.log("test");
        };
      case "close":
      default:
        return () => {
          this.close();
        };
    }
  }
}
