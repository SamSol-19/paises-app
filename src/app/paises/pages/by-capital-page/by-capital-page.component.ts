import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/pais';
import { CommonModule } from '@angular/common';
import { PaisTableComponent } from "../../components/pais-table/pais-table.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchBoxComponent,
    CommonModule, PaisTableComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public paises: Pais[] = [];


  constructor(private paisesService: PaisesService) { }



  busquedaByCapital(term: string): void {
    console.log('Desde byCapital');
    this.paisesService.searchCapital(term)
    .subscribe( paises => {
      this.paises = paises;
    });
  }

}
