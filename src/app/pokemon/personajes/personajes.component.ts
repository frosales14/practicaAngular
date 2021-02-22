import { Component } from '@angular/core';

import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
  get personajes() {
    return this.pokemonService.personajes;
  }

  constructor(public pokemonService: PokemonService) { }

}
