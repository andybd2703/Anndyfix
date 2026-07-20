import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import {
  MANTENIMIENTO_FISICO,
  MANTENIMIENTO_FORMATEO,
  MANTENIMIENTO_SOFTWARE,
} from '../inicio/Components/inicio-assets';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios implements OnInit {
  software = MANTENIMIENTO_SOFTWARE;
  formateo = MANTENIMIENTO_FORMATEO;
  fisico = MANTENIMIENTO_FISICO;

  descripcionFisico: string[] = [];
  descripcionSoftware: string[] = [];
  descripcionFormateo: string[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.cargarDescripciones();
    this.translate.onLangChange.subscribe(() => {
      this.cargarDescripciones();
    });
  }

  private cargarDescripciones() {
    this.translate
      .get([
        'servicios.descripcion_fisico',
        'servicios.descripcion_software',
        'servicios.descripcion_formateo',
      ])
      .subscribe((res) => {
        this.descripcionFisico = this.parseLista(res['servicios.descripcion_fisico']);
        this.descripcionSoftware = this.parseLista(res['servicios.descripcion_software']);
        this.descripcionFormateo = this.parseLista(res['servicios.descripcion_formateo']);
      });
  }

  private parseLista(value: unknown): string[] {
    if (Array.isArray(value)) {
      return value.map((item) => String(item).trim()).filter(Boolean);
    }
    if (typeof value === 'string' && value.trim()) {
      return value
        .split(' - ')
        .map((item) => item.trim())
        .filter(Boolean);
    }
    return [];
  }
}
