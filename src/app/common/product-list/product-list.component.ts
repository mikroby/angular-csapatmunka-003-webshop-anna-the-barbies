import { ProductService } from 'src/app/service/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() list: Product[] = [new Product()];
  @Input() catPage: number = 0;

  categoryName: string = '';

  phrase: string = '';

  filterKey: string = '';

  direction: number = 1;
  dirText: string[] = ['növekvő', 'csökkenő'];

  // ha majd megy a JSON service és van getKeysToFilterBy() is:
  // keys: string[][] = Object.entries(this.productService.getKeysToFilterBy());
  keys: string[][] =
    [
      ["name", "név"],
      ["price", "ár"],
      ["stock", "készleten"],
      ["featured", "kiemelt hős"]
    ];

  sortKey: string = this.keys[0][0];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategory(this.catPage).subscribe(
      category => this.categoryName = category.name
    );
  }

  changeSortDirection(): void {
    this.direction *= -1;
    [this.dirText[0], this.dirText[1]] = [this.dirText[1], this.dirText[0]];
  }
}
