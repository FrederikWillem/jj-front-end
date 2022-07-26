import { Component, Input, OnInit } from '@angular/core';
import { dummyProduct } from '../dummyproducten';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  producten : ProductData[] = dummyProduct;

  constructor() { }

  ngOnInit(): void {
  }

  public get amountOfProduct(): number {
    return this.producten.length;
  }

  public get productsFirstColumn(): ProductData[] {
    return this.producten;
  }

}
