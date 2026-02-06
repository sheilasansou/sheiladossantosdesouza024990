import { Routes } from '@angular/router';
import { PetListComponent } from './pages/pet-list/pet-list.component';
import { PetDetailComponent } from './pages/pet-detail/pet-detail.component';
import { PetFormComponent } from './pages/pet-form/pet-form.component';
import { TutorFormComponent } from './pages/tutor-form/tutor-form.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: PetListComponent }, // Tela Inicial agora é a lista
  { path: 'pet/novo', component: PetFormComponent },
  { path: 'pet/editar/:id', component: PetFormComponent },
  { path: 'pet/detalhes/:id', component: PetDetailComponent },
  { path: 'tutor/novo', component: TutorFormComponent },
  { path: 'tutor/editar/:id', component: TutorFormComponent },
  { path: 'login', component: LoginComponent },
];