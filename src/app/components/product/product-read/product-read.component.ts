import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductResponse } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: ProductResponse[];
  displayedColumns = ['id','name','price','edit'];

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit() {

    this.productService.read().subscribe(response => {
      this.products = response;
    });

  }

  navigateToEditProduct(id: number){
    this.router.navigate(['products/update'], { queryParams: { id } });
  }
d
}
