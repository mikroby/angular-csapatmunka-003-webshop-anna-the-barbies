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
  featuredToDisplay: Product[] = this.productService.getRandom(this.allFeatured);
  allProduct: Product[] = this.productService.getAll();
  discountToDisplay: Product[] = this.productService.getRandom(this.allProduct);
  
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
