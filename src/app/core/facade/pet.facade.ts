import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PetService } from '../services/pet.service';

@Injectable({ providedIn: 'root' })
export class PetFacade {
  private _pets = new BehaviorSubject<any[]>([]);
  public readonly pets$ = this._pets.asObservable();

  constructor(private petService: PetService) {}

  listarTodos() {
    this.petService.list().subscribe(res => {
      this._pets.next(res.content || res);
    });
  }
}