import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetAllCodesComponent } from './Code/get-all-codes/get-all-codes.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GetAllCodesComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CodeExecuter';
}
