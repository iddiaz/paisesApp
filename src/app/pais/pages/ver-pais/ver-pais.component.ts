import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  // permite suscribirse a cualquier cambio de la url

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe( ({id} )=> {
    //   this.paisService.getPaisPorCodigo(id).subscribe((pais)=>{
    //     console.log('pais',pais)
    //   })
    // } )

    this.activatedRoute.params
      .pipe(
        switchMap( ({id} ) => this.paisService.getPaisPorCodigo(id) ),
        tap(console.log) //rx operator - dispara efecto secundario 
      )
      .subscribe( pais => {
              
        this.pais = pais[0]
      } )

  }

}
