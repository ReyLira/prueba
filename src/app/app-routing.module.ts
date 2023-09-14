import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdolescenteComponent } from './components/adolescente/adolescente.component';
import { AdolescenteFormComponent } from './components/adolescente-form/adolescente-form.component';

const routes: Routes = [
  {
    path: 'adolescente',
    component: AdolescenteComponent
  },
  {
    path: 'adolescente-form',
    component: AdolescenteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
