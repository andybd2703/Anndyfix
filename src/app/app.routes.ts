import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Servicios } from './servicios/servicios';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'servicios', component: Servicios },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' },
];
