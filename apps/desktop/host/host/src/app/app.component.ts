import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    InputTextModule,
    ButtonModule,
    MessageModule,
    FormsModule,
  ],
  selector: 'taz-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host';
  text = '';

  msg = '';

  onClick() {
    this.msg = 'Welcome ' + this.text;
  }
}
