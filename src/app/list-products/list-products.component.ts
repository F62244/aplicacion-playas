import { Component, OnInit } from '@angular/core';
import {Product} from '../services-interfaces/interfaces.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] =[
    {id:1, name: 'Coca Cola', description: 'Bebida con gas y azúcar', price:2000, stock: 7000},
    {id:2, name: 'Baggio', description: 'Bebida con azúcar', price: 1500, stock: 4000},
    {id:3, name: 'Tang', description: 'Polvo para jugo', price: 400, stock: 10000},
    {id:4, name: 'Agua saborizada', description: 'Bebida con azúcar', price:14000, stock: 5000},
  ]

  constructor(){}
  ngOnInit(): void{

  }
}
