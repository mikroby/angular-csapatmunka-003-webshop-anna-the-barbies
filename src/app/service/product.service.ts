import { HttpClient } from '@angular/common/http'
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = environment.baseUrl;
  products: string = environment.products;
  categories: string = environment.categories;
  keysToFilterBy: string = environment.keysToFilterBy;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}${this.products}`);
  }
  getOne(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}${this.products}/${id}`);
  }
  getAllFeaturedByCatId(catId: string | number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}${this.products}?catId=${catId}&featured=true`);
  }
  getFeaturedAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}${this.products}?featured=true`);
  }
  getAllbyCatId(catId: string | number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}${this.products}?catId=${catId}`);
  }
  getCategory(id: string | number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}${this.categories}/${id}`);
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}${this.categories}`);
  }
  getKeysToFilterBy(): Observable<string[][]> {
    return this.http.get<string[][]>(`${this.baseUrl}${this.keysToFilterBy}`)
  }

  getRandom(list: Product[], num: number = 5): Product[] {
    num = num > list.length ? list.length : num;
    const copyList = [...list];
    const result: Product[] = [];
    for (let i = 0; i < num; i++) {
      const index = Math.floor(Math.random() * copyList.length);
      result.push(copyList[index]);
      copyList.splice(index, 1);
    }
    return result;
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<Observable<any>>(`${this.baseUrl}${this.products}`, product);
  }

  addCategory(category: Category): Observable<any> {
    return this.http.post<Observable<any>>(`${this.baseUrl}${this.products}`, category);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(
      `${this.baseUrl}${this.products}/${product.id}`,
      product
    );
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.patch<Category>(
      `${this.baseUrl}${this.categories}/${category.id}`,
      category
    );
  }

  removeProduct(product: Product): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.products}/${product.id}`);
  }

  removeCategory(category: Category): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.categories}/${category.id}`);
  }

}
