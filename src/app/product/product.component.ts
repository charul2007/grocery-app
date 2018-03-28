import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from './product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  private products: Product[];

  private isNewProduct: boolean = false;
  private newProduct: any = {};

  private isEditProduct: boolean = false;
  private editedProduct: any = {};

  private isExistingProduct: boolean = false;
 
  constructor(private productService: ProductService) { }

  ngOnInit() {

  	this.products = this.productService.getProducts();

  }

  addProduct() {

  	this.isNewProduct = true;

  }

  saveProduct(product: Product) {

  	if(this.isNewProduct) {
  	  this.productService.addProducts(product);
  	  this.isNewProduct = false;
  	  this.isEditProduct = false;
  	  this.newProduct = {};
  	}
  	
  }

  editProduct(product: Product) {

  	if(!product) {
  	  this.isExistingProduct = false;
  	}
  	this.isEditProduct = true;
  	this.isNewProduct = false;
  	this.editedProduct = product;
  }

  updateProduct(product: Product) {

  }
}
