import {Component,} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'calculator';

  display: string = '';
  result: string = '';
  firstValue!: number;
  secondValue!: number;
  operator: string = '';
  subDisplay: string = '';
  operatorSet: number = 0;
  calculationString: string = '';
  validOperations: any = {0: 8, 1: 17};
  haveDot: boolean = false
  operationEl: any = ['/', 'x', '%', '+', '-', '√'];

  pressKey(key: string) {


    if (key === '.' && !this.haveDot) {
      this.haveDot = true
    } else if (key === '.' && this.haveDot) {
      return;
    }


    if (this.operationEl.indexOf(key) != -1) {
      this.operatorSet = 1;
      this.operator = key
    }
    if (this.display.length === this.validOperations[this.operatorSet]) {
      return;
    }

    this.display += key
    this.subDisplay = this.display


  }


  allClear() {
    this.result = ''
    this.subDisplay = ''
    this.display = ''
    this.operator = ''
    this.operatorSet = 0
    this.haveDot = false
  }


  pressCE() {

    if (this.display !== '') {
      this.display = this.display.slice(0, -1)
    }

  }


  pressEqual() {
    this.haveDot = false

    if (this.display === '') {
      return;
    }


    this.calculationString = this.display
    this.firstValue = parseFloat(this.display);
    this.secondValue = parseFloat(this.display.split(this.operator)[1]);

    switch (this.operator) {

      case '/':
        this.display = (this.firstValue / this.secondValue).toString()
        this.result = this.calculationString
        this.subDisplay = this.calculationString
        break;

      case 'x':

        this.result = this.display;
        this.display = (this.firstValue * this.secondValue).toString()
        this.result = this.calculationString
        break;

      case '-':
        this.result = this.display;
        this.display = (this.firstValue - this.secondValue).toString()
        this.result = this.calculationString
        break;

      case '+':
        this.result = this.display;
        this.display = (this.firstValue + this.secondValue).toString()
        this.result = this.calculationString
        break;

      case '%':
        this.result = this.display;
        this.display = (this.firstValue * this.secondValue / 100).toString()
        this.result = this.calculationString
        break;

      case '√':
        this.result = this.display;
        this.display = (Math.sqrt(this.secondValue)).toString()
        this.result = this.calculationString
        break;
    }

  }

}
