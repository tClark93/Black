import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { AnimalIDComponent } from './animal-id/animal-id.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'pets', component: AllComponent },
  { path: 'pets/new', component: CreateComponent },
  { path: 'pets/:id', component: AnimalIDComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
