import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';


@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  product$: Observable<Product> = this.ar.params.pipe(
    switchMap( params => this.productService.getOne(params['id']) ),
  );
  categories$: Observable<Category[]> = this.productService.getAllCategories();

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onUpdateProduct(product: Product): void {
    this.productService.updateProduct(product).subscribe(
      product => this.router.navigate(['/admin']),
      err => console.error(err)
    );
  }

}
