import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
   
    button {
      margin-right: 5px;
    }
  
  `

  ]
})
export class PorRegionComponent implements OnInit {

  // regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];



  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  activarRegion(region: string){
    
    if (region=== this.regionActiva){
      return;
    }
    
    this.regionActiva = region;
    this.paises = [];
    this.buscarRegion(region);
  }

  getClaseCss( region: string ): string {
    return (region=== this.regionActiva) 
                ? 'btn btn-primary' 
                : 'btn btn-outline-primary' 
  }

  buscarRegion(region:string) {

    this.paisService.getPaisPorRegion( region )
    .pipe(tap(console.log))
    .subscribe( resp =>{
      this.paises = resp;
   
    })

  }



}
