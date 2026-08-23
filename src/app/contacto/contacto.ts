import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {}
