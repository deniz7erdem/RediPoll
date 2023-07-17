import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = '';
  options: string[] = ['', ''];

  constructor(private elementRef: ElementRef) { }

  checkOptionInput(event: any, i: number) {
    console.log(event.target.value + '\n' + i);
    this.checkOption(event, i)
  }
  checkOptionBlur(event: any, i: number) {
    if (event.target.value == '' && this.options.length > 1 && i != this.options.length - 1) {
      console.log('empty and not last');
      this.options.splice(i, 1);
      return;
    }
    this.checkOption(event, i)
  }

  checkOption(event: any, i: number) {
    if (event.target.value != '' && i >= 1 && i == this.options.length - 1) {
      console.log('not empty and last');
      this.options.push('');
    }
  }

  pinDown(event: any, i: number) {
    if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
      return;
    } else if (event.key == 'ArrowLeft' && i != 0) {
      this.elementRef.nativeElement.querySelector(`#pin${i - 1}`).focus();
    } else if (event.key == 'ArrowRight' && i != 5) {
      this.elementRef.nativeElement.querySelector(`#pin${i + 1}`).focus();
    } else if (i != 5 && event.target.value != '' && event.key != 'Backspace') {
      this.elementRef.nativeElement.querySelector(`#pin${i + 1}`).focus();
    }
  }

  pinUp(event: any, i: number) {
    if (event.key == 'Backspace' && i != 0) {
      this.elementRef.nativeElement.querySelector(`#pin${i - 1}`).focus();
    }
  }

  deny() {
    console.log(this.options);
  }

}
