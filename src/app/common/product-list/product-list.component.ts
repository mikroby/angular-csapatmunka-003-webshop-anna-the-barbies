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

  categoryName: string = '';

  phrase: string = '';

  filterKey: string = '';
  
  direction: number = 1;
  
  // ha majd megy a JSON service:
  // keys: string[][] = Object.entries(this.productService.getKeysToFilterBy());
  keys: string[][] =
  [
    ["name", "név"],
    ["description", "leírás"],
    ["price", "ár"],
    ["stock", "készleten"],
    ["featured", "kiemelt hős"]
  ];

  sortKey: string = this.keys[0][0];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.categoryName = this.productService.getCategory(this.list[0].catId).name;
  }


}
