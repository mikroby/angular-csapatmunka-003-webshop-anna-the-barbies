import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss']
})
export class CategoryEditorComponent implements OnInit {

  list$: Observable<Category[]> = this.productService.getAllCategories();
  keys: string[] = Object.keys(new Category());
  disabled: boolean = true;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRemoveCategory(category: Category): void {
    this.productService.removeCategory(category).subscribe(
      category => this.router.navigate(['/admin']),
      err => console.error(err)
    );
  }
  onUpdateCategory(category: Category): void {
    this.productService.updateCategory(category).subscribe(
      category => this.router.navigate(['/admin']),
      err => console.error(err)
    );
  }
}
