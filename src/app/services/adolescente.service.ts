import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Adolescente} from '../model/adolescente.model';

@Injectable({
  providedIn: 'root'
})
export class AdolescenteService {

  url: string = 'http://localhost:8080/v1/adolescente/list';
  url1: string = 'http://localhost:8080/v1/adolescente';
  urlRegistro: string ='http://localhost:8080/v1/adolescente';

  adolescenteSelected: Adolescente | undefined = undefined;

  constructor( private http: HttpClient) { }


  findAll(){
    return this.http.get<any[]>(`${this.url}/list`);
  }

  findAllActive() {
    return this.http.get<any[]>(`${this.url1}/activo`);
  }

  findAllInactive() {
    return this.http.get<any[]>(`${this.url1}/inactivos`);
  }

  save(adolescente: Adolescente){
    return this.http.post(this.urlRegistro, adolescente)
  }

  update(adolescente: Adolescente){
    return this.http.put(this.urlRegistro + '/' +
     adolescente.id, adolescente);
  }

  restaurarAdolescente(id: string) {
    return this.http.put(this.url1 + '/restaurar/' + id, null);
  }

  delete(id: string){
    return this.http.delete(`${this.url1}/${id}`)
  }

}
