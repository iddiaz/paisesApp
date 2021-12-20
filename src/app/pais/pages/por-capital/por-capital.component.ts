import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  hayError: boolean = false;
  termino: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService  ) { }

  ngOnInit(): void {
  }

  
  buscar(termino:string){
    
    this.hayError = false;
    this.termino = termino;  
    
    this.paisService.buscarCapital(this.termino)
      .subscribe( (paises )=>{
        this.paises = paises;
        // console.log(paises)
        
      }, (err)=> {
          this.hayError = true;
          console.log(err)})

  }

  sugerencias(termino: string ){
    this.hayError = false;
    //TODO crear sugerencias
  }

}
