import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listados } from '../model/listado.model';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  urlLis: string = 'http://localhost:8080/v1/Listado/list';

  adolescenteSelected: Listados | undefined = undefined;

  constructor(private http: HttpClient) { }

  findListado(){
    return this.http.get(this.urlLis);
  }
}
