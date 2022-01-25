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

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.categoryName = this.productService.getCategory(this.list[0].catId).name;
  }


}
