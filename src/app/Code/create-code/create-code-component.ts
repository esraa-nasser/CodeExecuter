import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-create-code-component',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './create-code-component.html',
  styleUrl: './create-code-component.css'
})
export class CreateCodeComponent {
  createForm: FormGroup;
_router:Router;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.createForm = this.fb.group({
      code: ['', Validators.required]
    });
    this._router = router;
  }
  onSubmit(): void {
    const code = this.createForm.get('code')?.value;

    if (this.createForm.valid) {
      this.http.post('https://localhost:7143/api/Code/AddCode', { code }).subscribe({
        next: () => {
          alert('Code created successfully!');
          this._router.navigate(['/codes']);
        },
        error: () => {
          alert('Failed to create code. Please try again.');
        }
      });
    }
  }
}
