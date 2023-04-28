import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  items: MenuItem[];

  constructor(public accountService: AccountService) { 
    this.items = [];
  }
  ngOnInit() {
    this.items = [
        {
          label: 'List',
          icon: 'pi pi-fw pi-users',
          routerLink: '/hero-list'
        },
        {
        label: 'Add Hero',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/add-hero'
        }
    ];
}
  logout(): void {
    this.accountService.logout().subscribe(res => {
      this.accountService.clearToken();
    })
  }
}