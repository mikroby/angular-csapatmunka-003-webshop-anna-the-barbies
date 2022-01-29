import { ProductService } from 'src/app/service/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Observable } from 'rxjs';


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
  
  keys!: string[][];
  
  sortKey!: string;
  
  constructor(private productService: ProductService) { }
  
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

  changeSortDirection(): void {
    this.direction *= -1;
    [this.dirText[0], this.dirText[1]] = [this.dirText[1], this.dirText[0]];
  }
}
