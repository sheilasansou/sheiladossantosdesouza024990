import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PetListComponent } from './pages/pet-list/pet-list.component';
import { PetFormComponent } from './pages/pet-form/pet-form.component';
import { TutorFormComponent } from './pages/tutor-form/tutor-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pets', component: PetListComponent }, 
  { path: 'pet/novo', component: PetFormComponent },
  { path: 'tutor/novo', component: TutorFormComponent },
  { path: '', redirectTo: '/pets', pathMatch: 'full' }, // Mudei de login para pets
  { path: '**', redirectTo: '/pets' } 
];