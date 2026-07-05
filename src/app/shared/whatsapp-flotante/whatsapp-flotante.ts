import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-flotante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-flotante.html',
  styleUrl: './whatsapp-flotante.scss',
})
export class WhatsappFlotante {
  @Input() numero: string = '573103322176'; // número con código de país, sin '+' ni espacios
  @Input() mensaje: string = 'Hola, quisiera más información';

  abrirWhatsapp(): void {
    const url = `https://wa.me/${this.numero}?text=${encodeURIComponent(this.mensaje)}`;
    window.open(url, '_blank');
  }
}
