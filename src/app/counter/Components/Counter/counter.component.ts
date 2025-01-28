import { Component, } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: ` 
    <h3>
  {{counter}}
</h3>

<button (click)="increasBy(1)">+1</button>
<button (click)="Reset()">Reset</button>
<button (click)="increasBy(-1)">-1</button>

    `
})

export class CounterComponent {
    public counter: number = 10;

  increasBy( amount : number):void{
   this.counter += amount; 
  }
  Reset():void{
    this.counter =10;
  }
}