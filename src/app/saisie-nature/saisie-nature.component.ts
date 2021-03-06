import { Component, OnInit } from '@angular/core';
import { Nature } from "../models/nature";
import { NatureService } from "../services/nature.service";
@Component({
  selector: 'app-saisie-nature',
  templateUrl: './saisie-nature.component.html',
  styleUrls: ['./saisie-nature.component.scss']
})
export class SaisieNatureComponent implements OnInit {

  listeNatures:Nature[]
  erreurTechnique = false;


  constructor(private NatureService:NatureService) { }



  ngOnInit(): void {

    this.NatureService.listeNatures().subscribe(
      listeNatures => this.listeNatures = listeNatures,
      error => this.erreurTechnique = true,
      () => { }
    )
  }

}
