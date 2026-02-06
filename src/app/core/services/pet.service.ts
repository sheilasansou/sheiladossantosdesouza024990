import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet, PetResponse, PetFoto } from '../models/pet.model'; // Import das models a serem utilizadas pela aplicação

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly API_URL = 'https://pet-manager-api.geia.vip/v1/pets';//url conforme o edital

  constructor(private http: HttpClient) {}

  // REQUISITO 1: Listagem
  list(page: number = 0, nome?: string): Observable<PetResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', '10');

    if (nome) params = params.set('nome', nome);

    return this.http.get<PetResponse>(this.API_URL, { params });
  }

  // REQUISITO 2: Detalhes
  getById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.API_URL}/${id}`);
  }

  // REQUISITO 3: Cadastro/Edição 
  // método save simplificado para fornecimento de código mais enxuto
  save(pet: Partial<Pet>): Observable<Pet> {
    if (pet.id) {
      return this.http.put<Pet>(`${this.API_URL}/${pet.id}`, pet);
    }
    return this.http.post<Pet>(this.API_URL, pet);
  }

  /**
   * REQUISITO 3: Upload de Foto
   */
  uploadFoto(id: number, arquivo: File): Observable<PetFoto> {
    const formData = new FormData();
    formData.append('file', arquivo); 

    return this.http.post<PetFoto>(`${this.API_URL}/${id}/fotos`, formData);
  }
}