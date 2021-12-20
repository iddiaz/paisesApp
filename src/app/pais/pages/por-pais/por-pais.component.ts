import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    
    li{
      cursor:pointer;
    }
  
  `
  ]
})
export class PorPaisComponent implements OnInit {

  hayError: boolean = false;
  termino: string = '';
  paises: Country[] = [];
  paisesSugeridos: Country[]=[];
  mostrarSugerencias: boolean = false;
 
  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino; 
    
    
    this.paisService.buscarPais(this.termino)
      .subscribe( (paises )=>{
        this.paises = paises;
        // console.log(paises)
        
      }, (err)=> {
          this.hayError = true;
          console.log(err)})

  }

  sugerencias(termino: string ){
    this.hayError = false; 
    this.termino = termino;   
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais( termino ).subscribe( paises => {
      this.paisesSugeridos = paises.splice(0,5);
    }, (error) => {
      this.paisesSugeridos = [];
    })
  }

  buscarSugerido( termino: string){
    this.buscar(termino);

  }

}
