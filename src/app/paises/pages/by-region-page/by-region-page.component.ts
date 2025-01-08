import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { PaisesService } from '../../services/paises.service';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { PaisTableComponent } from '../../components/pais-table/pais-table.component';

@Component({
  selector: 'app-by-region-page',
  imports: [CommonModule, SearchBoxComponent, PaisTableComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public paises: Pais[] = [];
    
    
      constructor(private paisesService: PaisesService) { }
    
    
    
      busquedaByRegion(term: string): void {
        console.log('Desde busquedaByRegion');
        this.paisesService.searchRegion(term)
        .subscribe( paises => {
          this.paises = paises;
        });
      }
}
