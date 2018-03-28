import { Injectable } from '@angular/core';
import { Product } from './product.interface';
import { PRODUCT_ITEMS } from './product-data';

@Injectable()
export class ProductService {
  
  private productItems = PRODUCT_ITEMS;

  getProducts(): Product[] {

  	return this.productItems;
  }

  addProducts(product: Product) {

  this.productItems.push(product);

  }

}
