import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import {
  DESCRIPCION,
  MANTENIMIENTO_FISICO,
  MANTENIMIENTO_FORMATEO,
  MANTENIMIENTO_SOFTWARE,
  OFFICE,
  WINDOWS,
} from './Components/inicio-assets';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements OnInit, OnDestroy {
  descripcion = DESCRIPCION;
  officeLogo = OFFICE;
  logo = WINDOWS;
  software = MANTENIMIENTO_SOFTWARE;
  formateo = MANTENIMIENTO_FORMATEO;
  fisico = MANTENIMIENTO_FISICO;

  descripcionFisico: string[] = [];
  descripcionSoftware: string[] = [];
  descripcionFormateo: string[] = [];
  diapositivaActiva = 0;
  readonly galeria = [
    { src: 'imgs/banner.png', alt: 'Optimización y reparación de computadoras' },
    { src: 'imgs/office.png', alt: 'Optimización y reparación de computadoras' },
    { src: 'imgs/windows_instalation.png', alt: 'Optimización y reparación de computadoras' },
  ];

  private autoplayId?: ReturnType<typeof setInterval>;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit() {
    this.cargarDescripciones();
    this.translate.onLangChange.subscribe(() => {
      this.cargarDescripciones();
    });

    if (isPlatformBrowser(this.platformId)) {
      this.iniciarAutoplay();
    }
  }

  ngOnDestroy() {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
    }
  }

  mostrarDiapositiva(indice: number) {
    this.diapositivaActiva = (indice + this.galeria.length) % this.galeria.length;
    this.iniciarAutoplay();
  }

  diapositivaAnterior() {
    this.mostrarDiapositiva(this.diapositivaActiva - 1);
  }

  diapositivaSiguiente() {
    this.mostrarDiapositiva(this.diapositivaActiva + 1);
  }

  private iniciarAutoplay() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.autoplayId) {
      clearInterval(this.autoplayId);
    }

    this.autoplayId = setInterval(() => this.diapositivaSiguiente(), 5000);
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
