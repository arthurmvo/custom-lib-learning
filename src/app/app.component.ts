import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MyLibComponent } from 'my-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTooltipModule, MyLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tailwind-test';
}
