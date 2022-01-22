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

  constructor(parameters?: Product) {
    if(!parameters) {return;}
    for (const key of Object.keys(parameters)){
      this[key] = parameters[key];
    }
  }
}
