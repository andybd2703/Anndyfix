import { Component } from '@angular/core';
import { DESCRIPCION } from '../inicio-assets';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-descripcion',
  imports: [TranslatePipe],
  templateUrl: './descripcion.html',
  styleUrl: './descripcion.scss',
})
export class Descripcion {
  descripcion = DESCRIPCION;
}
