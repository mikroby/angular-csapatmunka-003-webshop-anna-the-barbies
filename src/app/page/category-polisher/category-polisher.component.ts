import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-category-polisher',
  templateUrl: './category-polisher.component.html',
  styleUrls: ['./category-polisher.component.scss']
})
export class CategoryPolisherComponent implements OnInit {

  category$: Observable<Category> = this.activatedRoute.params.pipe(
    switchMap( params => this.productService.getOne(params['id']))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onUpdateCategory(category: Category): void {
    this.productService.updateCategory(category).subscribe(
      category => this.router.navigate(['/admin']),
      err => console.error(err)
    );
  }
}
