import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterfacesService {

  constructor() { }
}

export interface UserService {
  id:number;
  name: string;
  status: string;
}

export interface Product{
  id:number;
  name:string;
  description:string;
  price:number;
  stock:number;
}
