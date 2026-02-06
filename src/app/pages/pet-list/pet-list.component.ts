import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PetService } from '../../core/services/pet.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pet-list.component.html'
})
export class PetListComponent implements OnInit {
  pets: any[] = [];
  searchName = '';

  constructor(
    private petService: PetService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(): void {
    // nome da busca para o serviço (Requisito 1)
    this.petService.list(0, this.searchName).subscribe({
      next: (res) => this.pets = res.content,
      error: (err) => console.error('Erro ao carregar pets', err)
    });
  }

  onSearch(event: any): void {
    this.searchName = event.target.value;
    this.loadPets(); // Recarrega a lista filtrada
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}