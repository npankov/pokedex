import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  Bulbasaur: Pokemon = {
    nom: 'Bulbasaur',
    numero: '1',
    type: 'Seed',
    description: ' There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger. ',
    taille: '2\' 04',
    poids: '15.2 lbs',
    evolution: 'no evolu',
    image: './assets/image/Bulbasaur.png'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
