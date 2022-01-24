import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allFeatured: Product[] = this.productService.getFeaturedAll();
  featuredToDisplay: Product[] = this.getRandom(this.allFeatured);
  allProduct: Product[] = this.productService.getAll();
  discountToDisplay: Product[] = this.getRandom(this.allProduct);
  
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  getRandom(list: Product[], num: number = 5): Product[] {
    const copyList = [...list];
    const result = [];
    for (let i = 0; i < num; i++) {
      const index = Math.floor(Math.random() * list.length);
      result.push(copyList[index]);
      copyList.splice(index, 1);
    }
    return result;
  }

}
