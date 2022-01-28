import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  featuredToDisplay: Product[]=[new Product()];
  discountToDisplay: Product[]=[new Product()];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

    this.productService.getFeaturedAll().subscribe(
      allFeatured => this.featuredToDisplay = this.productService.getRandom(allFeatured)
    );
    
    this.productService.getAll().subscribe(
      allProducts=> this.discountToDisplay = this.productService.getRandom(allProducts)
    );

  }

}
