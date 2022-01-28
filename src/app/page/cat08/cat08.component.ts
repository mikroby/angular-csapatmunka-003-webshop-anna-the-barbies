import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat08',
  templateUrl: './cat08.component.html',
  styleUrls: ['./cat08.component.scss']
})
export class Cat08Component implements OnInit {

  page:number = 8;

  catFeaturedToDisplay: Product[] = [new Product()];
  listByCatId: Product[] = [new Product()];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

    this.productService.getAllFeaturedByCatId(this.page).subscribe(
      catFeaturedAll => this.catFeaturedToDisplay = this.productService.getRandom(catFeaturedAll)
    );

    this.productService.getAllbyCatId(this.page).subscribe(
      allByCatId => this.listByCatId = allByCatId
    );

  }

}
