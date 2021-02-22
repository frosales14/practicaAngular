import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  
  nuevo: Personaje = {
    nombre: 'Snorlax',
    tipo: 'normal',
    pertenece: 'Ash',
    hp: 10000
  }

  agregar() {
    if(this.nuevo.nombre.trim().length === 0 ) { return; }
    this.pokemonService.agregar( this.nuevo );
    this.nuevo = {
      nombre: '',
      tipo: '',
      pertenece: '',
      hp: 0
    };
  }
  constructor(public pokemonService: PokemonService) { }
}
