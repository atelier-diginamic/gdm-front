import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collegue } from 'src/app/auth/auth.domains';
import { AuthService } from 'src/app/auth/auth.service';
import { Mission } from 'src/app/models/mission';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-gestion-mission',
  templateUrl: './gestion-mission.component.html',
  styleUrls: ['./gestion-mission.component.scss']
})
export class GestionMissionComponent implements OnInit {

  collegue: Collegue
  listMission: Mission[]
  erreurTechnique = false

  constructor(
    private missionService: MissionService,
    private authService: AuthService,
    private router: Router) {

  }
  demanderMission() {
  }

  editerMission(mission: Mission) {
    this.router.navigateByUrl("/modification-mission/" + mission.id)
  }

  supprimerMission(id:number) {
   this.missionService.supprimerMission(id).subscribe(listM=>this.listMission=listM)
  }

  ngOnInit(): void {
    this.authService.collegueConnecteObs.subscribe(
      col => {
        this.collegue = col;
        this.missionService.listeMissions(this.collegue.id).subscribe(
          listM => this.listMission = listM,
          () => this.erreurTechnique = true,
        );
      })
  }
}
