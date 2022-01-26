import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from '../service/config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navbarOpen = false;
  appName: string = this.config.appName;
  menuItems: IMenuItem[] = this.config.menuItems;
  navbarOpen = false;
  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
