import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Inicio, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('anndyfix');
}
