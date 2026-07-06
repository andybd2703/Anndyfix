import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { WINDOWS } from '../inicio-assets';

@Component({
  selector: 'app-windows-paquetes',
  imports: [TranslatePipe],
  templateUrl: './windows-paquetes.html',
  styleUrl: './windows-paquetes.scss',
})
export class WindowsPaquetes {
  logo = WINDOWS;
}
