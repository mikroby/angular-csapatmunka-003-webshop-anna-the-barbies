import { Component, Input, OnInit } from '@angular/core';
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
  keys$: string[] = Object.keys(new Product());
  disabled: boolean = true;

  @Input() list: Product[] = [new Product()];
  @Input() catPage: number = 0;

  categoryName: string = '';

  phrase: string = '';

  filterKey: string = '';

  direction: number = 1;
  dirText: string[] = ['növekvő', 'csökkenő'];

  keys!: string[][];

  sortKey!: string;

  constructor(
    private productService: ProductService,
      ) { }

  ngOnInit(): void {
    this.productService.getCategory(this.catPage).subscribe(
      category => this.categoryName = category.name
      );

    this.productService.getKeysToFilterBy().subscribe(
      allKeys => {
        this.keys = Object.entries(allKeys[0])
        this.sortKey = this.keys[0][0];}
    );
  }

  onRemoveProduct(product: Product): void {
    this.productService.removeProduct(product).subscribe(
      product => location.reload(),
      err => console.error(err)
    );
  }
  changeSortDirection(): void {
    this.direction *= -1;
    [this.dirText[0], this.dirText[1]] = [this.dirText[1], this.dirText[0]];
  }

}
