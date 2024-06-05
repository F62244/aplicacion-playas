import { Component, OnInit } from '@angular/core';
import { ServicesInterfaces } from '../services-interfaces/interfaces.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userList: UserList){}

  ngOnInit(): void {
    this.userList.obtenerDatos().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error: any) => {
        console.log('Error al obtener datos', error);
      }
    );
  }
}