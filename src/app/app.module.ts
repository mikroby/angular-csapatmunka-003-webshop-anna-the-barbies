import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { Cat04Component } from './page/cat04/cat04.component';
import { Cat05Component } from './page/cat05/cat05.component';
import { Cat06Component } from './page/cat06/cat06.component';
import { Cat07Component } from './page/cat07/cat07.component';
import { Cat08Component } from './page/cat08/cat08.component';
import { Cat09Component } from './page/cat09/cat09.component';
import { Cat10Component } from './page/cat10/cat10.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductSliderComponent } from './common/product-slider/product-slider.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './page/data-editor/data-editor.component';
import { AddProductComponent } from './page/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    Cat03Component,
    Cat04Component,
    Cat05Component,
    Cat06Component,
    Cat07Component,
    Cat08Component,
    Cat09Component,
    Cat10Component,
    ProductCardComponent,
    ProductSliderComponent,
    ProductListComponent,
    FilterPipe,
    SorterPipe,
    AdminComponent,
    DataEditorComponent,
    AddProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
