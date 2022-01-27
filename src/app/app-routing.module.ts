import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { Cat04Component } from './page/cat04/cat04.component';
import { Cat05Component } from './page/cat05/cat05.component';
import { Cat06Component } from './page/cat06/cat06.component';
import { Cat07Component } from './page/cat07/cat07.component';
import { Cat08Component } from './page/cat08/cat08.component';
import { Cat09Component } from './page/cat09/cat09.component';
import { Cat10Component } from './page/cat10/cat10.component';
import { DataEditorComponent } from './page/data-editor/data-editor.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cat01',
    component: Cat01Component,
  },
  {
    path: 'cat02',
    component: Cat02Component,
  },
  {
    path: 'cat03',
    component: Cat03Component,
  },
  {
    path: 'cat04',
    component: Cat04Component,
  },
  {
    path: 'cat05',
    component: Cat05Component,
  },
  {
    path: 'cat06',
    component: Cat06Component,
  },
  {
    path: 'cat07',
    component: Cat07Component,
  },
  {
    path: 'cat08',
    component: Cat08Component,
  },
  {
    path: 'cat09',
    component: Cat09Component,
  },
  {
    path: 'cat10',
    component: Cat10Component,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'data-editor',
    component: DataEditorComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
