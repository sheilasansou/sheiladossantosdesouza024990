import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TutorService } from '../../core/services/tutor.service';

@Component({
  selector: 'app-tutor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './tutor-form.component.html'
})
export class TutorFormComponent {
  tutorForm = this.fb.group({
    nome: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required]],
    endereco: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private tutorService: TutorService,
    private router: Router
  ) {}

  onSubmit() {
  if (this.tutorForm.valid) {
    const rawValues = this.tutorForm.getRawValue();
    
    const payload = {
      nome: rawValues.nome,
      email: rawValues.email,
      telefone: rawValues.telefone,
      endereco: rawValues.endereco,
      cpf: Number(String(rawValues.cpf ?? '').replace(/\D/g, ''))
    };

    console.log('DADOS SENDO ENVIADOS:', payload);

    this.tutorService.save(payload as any).subscribe({
      next: () => {
        alert('Tutor cadastrado com sucesso!');
        this.router.navigate(['/pets']);
      },
      error: (err) => {
        console.error('ERRO DETALHADO DA API:', err);
        alert('Erro ao salvar: ' + JSON.stringify(err.error));
      }
    });
  }
}
}