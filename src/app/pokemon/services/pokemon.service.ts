import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';


@Injectable()
export class PokemonService {
    private _personajes: Personaje[] = [
        {
          nombre: 'Charmander',
          tipo: 'fuego',
          pertenece: 'Ash',
          hp: 2000
        },
        {
          nombre: 'Pikachu',
          tipo: 'Trueno',
          pertenece: 'Ash',
          hp: 3000
        }
      ];
      
    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    constructor() {
        console.log('Hola');
    }

    agregar( personaje: Personaje ) {
        this._personajes.push( personaje );
    }
}