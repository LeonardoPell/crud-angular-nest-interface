import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { ProductRequest } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  id: number;

  product: ProductRequest = {
    name: '',
    price: null
  }

  constructor(
    private router: Router,
    private params: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {

    this.params.queryParams.subscribe(params => {
      this.id = params.id;
      this.productService.select(this.id).subscribe(response => {
        this.product.name = response.name;
        this.product.price = response.price;
      });
    });

  }

  update(){
    this.productService.update(this.product,this.id).subscribe(() => {
      this.productService.showMessage("Produto autualizado com sucesso!");
      this.router.navigate(['/products']);
    });
  }

  delete(){
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMessage("Produto deletado com sucesso!");
      this.router.navigate(['/products']);
    });
  }

  cancel(){
    this.router.navigate(['/products']);
  }

}
