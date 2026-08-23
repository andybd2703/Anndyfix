import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Servicios } from './servicios/servicios';
import { Contacto } from './contacto/contacto';
import { Navbar } from './shared/navbar/navbar';
import { WhatsappFlotante } from './shared/whatsapp-flotante/whatsapp-flotante';
import { Footer } from './shared/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, WhatsappFlotante, Footer, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('anndyfix');
}
