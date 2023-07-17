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

  focusPin(event: any, i: number) {
    if (event.target.value == '') {
      console.log('empty');
      if (i != 0) {
        this.elementRef.nativeElement.querySelector(`#pin${i - 1}`).focus();
      }
      return;
    }
    this.elementRef.nativeElement.querySelector(`#pin${i + 1}`).focus();
  }

  deny() {
    console.log(this.options);
  }

}
