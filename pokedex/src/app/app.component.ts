import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nom = "Salamèche";
  numero = "#004";
  type = "Feu";
  description = "Il préfère les endroits chauds. En cas de pluie, de la vapeur
    se forme autour de sa queue."
  taille = "0.6 m"
  poids = "8.5 kg"
  evolution = "Reptincel"
}
