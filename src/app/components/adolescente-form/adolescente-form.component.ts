import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdolescenteService } from 'src/app/services/adolescente.service';

@Component({
  selector: 'app-adolescente-form',
  templateUrl: './adolescente-form.component.html',
  styleUrls: ['./adolescente-form.component.scss']
})
export class AdolescenteFormComponent implements OnInit, OnDestroy {


  adolescenteForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
    private fb: FormBuilder,
    public adolescenteService: AdolescenteService) { }

  ngOnInit(): void {
    this.initAdolescenteForm();
  }

  navigateAdolescente() {
    this.router.navigate(['adolescente'])
  }

  initAdolescenteForm() {
    this.adolescenteForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      father_surname: ['', Validators.required],
      mother_surname: ['', Validators.required],
      document_type: ['', Validators.required],
      document_number: ['', Validators.required],
      birthdate: ['', Validators.required],
      cell_phone: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      state: ['A'],
      crime_committed: ['', Validators.required],
      attorney: ['', Validators.required]
    });
    if (this.adolescenteService.adolescenteSelected) {
      this.adolescenteForm.patchValue(this.adolescenteService.adolescenteSelected);
    }
  }

  saveAdolescente() {
    if (this.adolescenteService.adolescenteSelected) {
      this.updateAdolescente();
    } else {
      this.createAdolescente();
    }
  }

  createAdolescente() {
    console.log('Datos de adolescente', this.adolescenteForm.value);
    this.adolescenteService.save(this.adolescenteForm.value).subscribe(res => {
      console.log('Se guardo:', res);
      this.adolescenteForm.reset();
      this.navigateAdolescente();
    })
  }

  updateAdolescente() {
    console.log('Datos de adolescente', this.adolescenteForm.value);
    this.adolescenteService.update(this.adolescenteForm.value).subscribe(res => {
      console.log('Se actualizo correctamente:', res);
      this.adolescenteForm.reset();
      this.navigateAdolescente();
    })
  }



  ngOnDestroy() {
    this.adolescenteService.adolescenteSelected = undefined;
  }

}
