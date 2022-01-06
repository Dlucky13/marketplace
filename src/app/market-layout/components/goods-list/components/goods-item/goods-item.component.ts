import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {GoodItem} from "../../../../../fakeData/rest-data";
import {state, style, transition, trigger} from "@angular/animations";
import {fromEvent} from "rxjs";

@Component({
  selector: 'mp-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
  animations: [
    trigger('focus', [
      state('start', style({transform: 'scale(0.9)'})),
      state('end', style({transform: 'scale(1)'}))
    ])
  ]
})
export class GoodsItemComponent implements OnInit {

  animationState:string = 'start';

  @Input() good!: GoodItem;
  @ViewChild('imgBlock', {static: true, read: ElementRef}) imgBlock!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    fromEvent(this.imgBlock.nativeElement,'mouseenter')
      .subscribe(()=> {this.animationState = 'end'})
    fromEvent(this.imgBlock.nativeElement,'mouseleave')
      .subscribe(()=> {this.animationState = 'start'})
  }

}
