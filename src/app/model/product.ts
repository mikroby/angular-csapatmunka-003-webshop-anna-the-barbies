export class Product {
  [key:string]: any;
  id: number = 0;
  catId: number = 0;
  name: string = '';
  description: string ='';
  image: string = '';
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean = true;

  constructor(parameters: Product) {
    this.id = parameters.id;
    this.catId = parameters.catId;
    this.name = parameters.name;
    this.description = parameters.description;
    this.image = parameters.image;
    this.price = parameters.price;
    this.stock = parameters.stock;
    this.featured = parameters.featured;
    this.active = parameters.active;
  }
}
