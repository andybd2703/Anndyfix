import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Navbar } from './shared/navbar/navbar';
import { WhatsappFlotante } from './shared/whatsapp-flotante/whatsapp-flotante';

@Component({
  selector: 'app-root',
  imports: [Inicio, Navbar, WhatsappFlotante],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('anndyfix');
}
