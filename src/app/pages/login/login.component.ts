import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', [Validators.required]], 
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = {
        username: this.loginForm.value.username!,
        password: this.loginForm.value.password!
      };

      this.authService.login(credentials).subscribe({
        next: (res) => {
          const token = res.access_token; 
  
        if (token) {
          localStorage.setItem('token', token); // Guardamos como 'token' para o interceptor achar
          this.router.navigate(['/pets']);
        }
        },
        error: (err) => {
          alert('Falha na autenticação. Verifique usuário e senha.');
        }
      });
    }
  }
}