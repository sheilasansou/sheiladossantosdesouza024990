import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PetService } from '../../core/services/pet.service';
import { TutorService } from '../../core/services/tutor.service';

@Component({
  selector: 'app-pet-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './pet-form.component.html'
})
export class PetFormComponent implements OnInit {
  tutores: any[] = []; // Lista para o Requisito 5

  petForm = this.fb.group({
    nome: ['', [Validators.required]],
    especie: ['', [Validators.required]],
    raca: ['', [Validators.required]],
    dataNascimento: ['', [Validators.required]],
    tutorId: [null, [Validators.required]] // Requisito 5: Vínculo obrigatório
  });

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private tutorService: TutorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTutores();
  }

loadTutores(): void {
  this.tutorService.list().subscribe({
    next: (res: any) => {
      // TENTATIVA A: Se vier dentro de 'content' (paginado)
      // TENTATIVA B: Se vier o array direto
      this.tutores = res.content || res; 
      
      console.log('TUTORES RECEBIDOS:', this.tutores);
      
      if (this.tutores.length === 0) {
        console.warn('Atenção: A lista de tutores veio vazia!');
      }
    },
    error: (err) => {
      console.error('Erro ao carregar tutores', err);
      // Se der erro 401 aqui, é o token que expirou!
      if (err.status === 401) alert('Sessão expirada. Faça login novamente.');
    }
  });
}
  onSubmit() {
  if (this.petForm.valid) {
    const rawPet = this.petForm.getRawValue();
    
    const payload = {
      nome: rawPet.nome,
      especie: rawPet.especie,
      raca: rawPet.raca,
      dataNascimento: rawPet.dataNascimento,
      tutorId: Number(rawPet.tutorId) 
    };

    this.petService.save(payload as any).subscribe({
      next: () => {
        alert('Pet vinculado ao tutor com sucesso!');
        this.router.navigate(['/pets']);
      },
     error: (err) => {
        console.error('ERRO NO VÍNCULO:', err);
        alert('Erro ao vincular: ' + (err.error?.message || 'Verifique os dados'));
      }
    });
  }
}
}