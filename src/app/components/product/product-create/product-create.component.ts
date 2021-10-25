import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRequest } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: ProductRequest = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  createProduct(){
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto Criado com sucesso!");
      this.router.navigate(['/products']);
    });
  }

  cancel(){
    this.router.navigate(['/products']);
  }

}
