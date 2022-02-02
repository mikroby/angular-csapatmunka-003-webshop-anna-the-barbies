import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  list$: Observable<Product[]> = this.productService.getAll();
  keys: string[] = Object.keys(new Product());
  disabled: boolean = true;
  filterKey: string = '';
  phrase: string = '';

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onRemoveProduct(product: Product): void {
    this.productService.removeProduct(product).subscribe(
      product => location.reload(),
      err => console.error(err)
    );
  }

}
