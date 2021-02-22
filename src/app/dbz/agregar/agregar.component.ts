import { Output, Component, Input, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/personajes.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0 ) { return; }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzServicio.agregarPersonaje( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

  constructor(private dbzServicio: DbzService) {}
}
