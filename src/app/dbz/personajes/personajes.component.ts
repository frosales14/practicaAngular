import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  @Input() personajes: Personaje[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
