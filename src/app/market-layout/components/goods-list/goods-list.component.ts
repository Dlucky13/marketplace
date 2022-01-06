import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {GoodItem, GOODS_DATA} from "../../../fakeData/rest-data";
import {fromEvent} from "rxjs";
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'mp-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

  constructor(@Inject(GOODS_DATA) public goods: GoodItem[]) { }

  ngOnInit(): void {
  }
}
