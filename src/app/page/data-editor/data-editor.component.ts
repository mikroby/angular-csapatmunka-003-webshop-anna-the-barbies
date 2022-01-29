import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  list$: Observable<Product[]> = this.productService.getAll();
  keys: string[] = Object.keys(new Product());

  constructor(
    private productService: ProductService,
    private router: Router
  ) {

   }

  ngOnInit(): void {
  }

}
