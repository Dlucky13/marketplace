import {InjectionToken} from "@angular/core";

export interface GoodItem {
  id: number;
  name: string;
  category: string;
  imgUrl: string;
  price: number;
  favorite: boolean;
}

export const GOODS_DATA = new InjectionToken('goods-data');
const IMAGES_LINK = 'assets/images/'

export const goodsData: GoodItem[] = [
  {id: 1, name: 'Iphone 12', category: 'phone', imgUrl: `${IMAGES_LINK}iphone12_purple.png`, price: 900, favorite: false},
  {id: 2, name: 'Ipad', category: 'tablet', imgUrl: `${IMAGES_LINK}ipad-pro-11.jpeg`, price: 1400, favorite: false},
  {id: 3, name: 'AirPods', category: 'headphones', imgUrl: `${IMAGES_LINK}airPods-pro.jpeg`, price: 300, favorite: false},
  {id: 4, name: 'Iphone 13', category: 'phone', imgUrl: `${IMAGES_LINK}iphone-13-pro-blue-select.png`, price: 1300, favorite: false},
  {id: 5, name: 'Macbook pro', category: 'notebook', imgUrl: `${IMAGES_LINK}macbook-pro-14-spacegray.jpeg`, price: 2500, favorite: false},
  {id: 6, name: 'Apple Watch', category: 'watch', imgUrl: `${IMAGES_LINK}watch-41-alum-green.jpeg`, price: 450, favorite: false}
]
