import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adolescente } from 'src/app/model/adolescente.model';
import { AdolescenteService } from 'src/app/services/adolescente.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-adolescente',
  templateUrl: './adolescente.component.html',
  styleUrls: ['./adolescente.component.scss']
})
export class AdolescenteComponent implements OnInit {

  adolescentes: any[] = [];
  filtroAdolescente: any [] = [];
  filterByStatus: string = 'active';


  constructor(private adolescenteService: AdolescenteService,
              private router: Router) { }

  ngOnInit() {
    this.findAllActive();
  }

  
  findAll(){
    this.adolescenteService.findAll().subscribe((res : any) => {
      console.log(res);
      this.adolescentes = res;
    })
  }

  findAllActive(){
    this.adolescenteService.findAllActive().subscribe((res : any) => {
      console.log(res);
      this.adolescentes = res;
    })
  }


  editarAdolescente(adolescente: Adolescente){
    this.adolescenteService.adolescenteSelected = adolescente;
    this.navigateForm();
  }

  deleteAdolescente(id: string){
    this.adolescenteService.delete(id).subscribe(res =>{
      console.log('Se a elimnado correctamente: ', res);
      this.findAllActive();
    })
  }

  restaurarAdolescente(adolescente: Adolescente): void {
    // Llama al servicio para restaurar al adolescente aquí.
    // Puedes implementar la lógica para actualizar el estado del adolescente a "activo".
    this.adolescenteService.restaurarAdolescente(adolescente.id).subscribe(res => {
      console.log('Se ha restaurado correctamente: ', res);
      this.loadAttorneys(); // Recarga la lista de adolescentes después de restaurar.
    });
  }


  navigateForm(){
    this.router.navigate(['adolescente-form']);
  }


  filterAttorneysByStatus(): void {
    if (this.filterByStatus === 'active') {
      this.filtroAdolescente = this.adolescentes.filter(adolescentes => adolescentes.active === 'yes');
    } else if (this.filterByStatus === 'inactive') {
      this.filtroAdolescente = this.adolescentes.filter(adolescentes => adolescentes.active === 'no');
    }
    this.loadAttorneys();
  } 

  loadAttorneys(): void {
    if (this.filterByStatus === 'active') {
      this.adolescenteService.findAllActive().subscribe(data => {
        this.adolescentes = data;
        this.filtroAdolescente = data;
      });
    } else if (this.filterByStatus === 'inactive') {
      this.adolescenteService.findAllInactive().subscribe(data => { 
        this.adolescentes = data;
        this.filtroAdolescente = data;
      });
    } else {
      this.adolescenteService.findAll().subscribe(data => {
        this.adolescentes = data;
        this.filtroAdolescente = data;
      });
    }
  }  
  
}
