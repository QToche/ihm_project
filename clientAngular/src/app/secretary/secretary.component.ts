import { Component, OnInit } from '@angular/core';
import {CabinetMedicalService} from '../cabinet-medical.service';
import {CabinetInterface} from '../dataInterfaces/cabinet';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {

  private _cms: CabinetInterface;
  public get cms(): CabinetInterface { return this._cms; }

  constructor(cabinetMedicalService: CabinetMedicalService ) {

    this.initCabinet(cabinetMedicalService);
  }

  ngOnInit() {
  }
  async initCabinet(cabinetMedicalService) {
    this._cms = await cabinetMedicalService.getData('/data/cabinetInfirmier.xml');
    console.log( this.cms );
  }



}

