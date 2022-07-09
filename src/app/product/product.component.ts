import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productData : ProductData;
  constructor() { }

  ngOnInit(): void {
  }

}
