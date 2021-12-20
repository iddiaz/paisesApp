import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlForRegion :string = 'https://restcountries.com/v2';

  get httpParams(){
  return new HttpParams().set('fields', ',capital, etc..')
  }

  constructor( private http: HttpClient ) { }
  
  buscarPais(termino:string): Observable<Country[]> {
    
    const url =`${this.apiUrl}/name/${termino}`;
    
    return this.http.get<Country[]>( url )
      // .pipe(
      //   catchError(err => of(['hola en el error desde el servicio']) )
      // )


  }

  buscarCapital(termino:string ): Observable<Country[]> {
    const url =`${this.apiUrl}/capital/${termino}`;
    // return this.http.get<Country[]>( url, {params: this.httpParams} ) mandado parametros...
    return this.http.get<Country[]>( url )
  }

  getPaisPorCodigo( id: string ): Observable<Country>{
 
    const url =`${this.apiUrl}/alpha/${id}`;    
    return this.http.get<Country>( url )
  }

  getPaisPorRegion( termino: string ): Observable<Country[]>{
    
  

    const url = `${this.apiUrl}/subregion/${termino}`;
    // return this.http.get<Country[]>(url, {params});
    // return this.http.get<Country[]>(url, {params: this.httpParams});
    return this.http.get<Country[]>(url);
  }
  
}
