import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/interfaces.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  datosUsuario!: Observable<any>;
  usuarios: any[] = [];

  constructor(private servicesInterfaces: ServicesInterfaces) { }

  ngOnInit(): void {
    this.datosUsuario = this.services.obtenerDatos();
    this.datosUsuario.subscribe(
      (data: any[]) => {
        this.usuarios = data;
      },
      (error: any) => {
        console.error('Error al obtener datos', error);
      }
    );
  }
}