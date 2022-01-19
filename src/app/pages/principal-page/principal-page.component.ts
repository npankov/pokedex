import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {
  listPokemon: Pokemon[];

  constructor() {
    this.listPokemon = [
      new Pokemon("Bulbizarre","#001","Terre","Il a une étrange graine plantée sur son dos. Elle grandit avec lui depuis la naissance.","0.6 m","8.5 kg","Herbizarre", './assets/image/001.png'),
      new Pokemon("Carapuce", "#007", "Eau", "Son dos durcit avec l'âge et devient une super carapace. Il peut cracher des jets d'écume.","0.5 m", "9.0 kg", "Carabaffe", './assets/image/002.png'),
      new Pokemon("Chenipan", "#010", "Insecte", "Ses petites pattes sont équipées de ventouses, lui permettant de grimper aux murs.", "0.3 m", "2.9 kg", "Chrysacier", './assets/image/003.png'),
      new Pokemon("Mélofée", "#100", "Normal", "Très recherché pour son aura mystique, il est très rare et ne vit que dans des endroits précis.", "0.6 m", "7.5 kg", "Non", './assets/image/004.png'),
      new Pokemon("Lokhlass", "#131", "Eau", "Ce POKéMON en voie d'extinction peut transporter des passagers sur son dos par-delà les océans.", "2.5 m", "220 kg", "Non", './assets/image/005.png'),
      new Pokemon("Sulfura", "#146", "Feu", "Le légendaire oiseau du feu. Une pluie de flammes surgit à chaque battement de ses ailes.", "2 m", "60 kg", "Non", './assets/image/006.png'),
      new Pokemon("Leveinard", "#113", "Normal", "Un POKéMON rare et difficile à capturer qui porte chance et bien-être à son possesseur.", "1.1 m", "34.6 kg", "Non", './assets/image/007.png'),
      new Pokemon("M.Mime", "#122", "Psy", "Dérangez-le pendant qu'il mime et il se battra en distribuant des volées de claques.", "1.3 m", "54.5 kg", "Non", './assets/image/008.png')
    ]
  }

  ngOnInit(): void {
  }

}
