import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Hero-Hire';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Bajnok', link: '/cat01'},
    {text: 'Bajkeverő', link: '/cat02'},
    {text: 'Utazásszervezés', link: '/cat03'},
    {text: 'Rekreáció', link: '/cat04'},
    {text: 'Nyomozás', link: '/cat05'},
    {text: 'Szaki', link: '/cat06'},
    {text: 'Show-műsor', link: '/cat07'},
    {text: 'Pénzügyi megoldások', link: '/cat08'},
    {text: 'Őrzés-védelem', link: '/cat09'},
    {text: 'Háztartási alkalmazott', link: '/cat10'},
    {text: 'Admin', link: '/admin'},
  ];

  constructor() { }
}
