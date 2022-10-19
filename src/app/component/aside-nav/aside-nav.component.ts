import { outputAst } from '@angular/compiler';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { nav_items, auth_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})
export class AsideNavComponent implements OnInit {

  @Output() close: EventEmitter<string>=new EventEmitter<string>()
  siteName:string=environment.siteName
  navs_data: Item[]= nav_items
  auths_data:Item[]=auth_items
  
  constructor() { }

  ngOnInit(): void {
  }
  handleClose(){
    this.close.emit()
  }
}
