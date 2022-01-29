import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  category = new Category();

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onAddCategory(category: Category): void {
    this.productService.addCategory(category).subscribe(
      category => this.router.navigate(['/category-editor']),
      err => console.error(err)
    );
  }
}
