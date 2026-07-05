import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-office',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './office.html',
  styleUrl: './office.scss',
})
export class Office {}
