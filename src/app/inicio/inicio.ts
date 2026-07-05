import { Component } from '@angular/core';
import { Descripcion } from './Components/descripcion/descripcion';
import { Office } from './Components/office/office';
import { WindowsPaquetes } from './Components/windows-paquetes/windows-paquetes';
import { NuestroServicios } from './Components/nuestro-servicios/nuestro-servicios';

@Component({
  selector: 'app-inicio',
  imports: [Descripcion, Office, WindowsPaquetes, NuestroServicios],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {}
