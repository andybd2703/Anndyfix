import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-whatsapp-flotante',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './whatsapp-flotante.html',
  styleUrl: './whatsapp-flotante.scss',
})
export class WhatsappFlotante implements OnInit, OnDestroy {
  @Input() numero: string = '573103322176'; // número con código de país, sin '+' ni espacios
  @Input() mensaje: string = 'Hola, quisiera más información';
  mensajeVisible = signal(true);
  private mensajeTimeout?: ReturnType<typeof setTimeout>;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.mensajeTimeout = setTimeout(() => {
        this.mensajeVisible.set(false);
      }, 3000);
    }
  }

  ngOnDestroy(): void {
    if (this.mensajeTimeout) {
      clearTimeout(this.mensajeTimeout);
    }
  }

  abrirWhatsapp(): void {
    const url = `https://wa.me/${this.numero}?text=${encodeURIComponent(this.mensaje)}`;
    window.open(url, '_blank');
  }
}
