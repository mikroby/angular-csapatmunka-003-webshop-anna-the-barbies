import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  catFeatured: Product[] = this.productService.getAllbyCatId(1);
  catFeaturedToDisplay: Product[] = this.getRandom(this.catFeatured);
  listByCatId: Product[] = this.productService.getAllbyCatId(1)

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
