import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'angularServices';

  isAuth = true;
  mAppareils: any[];

  constructor(private appareilService: AppareilService){}

  ngOnInit(): void {
    this.mAppareils = this.appareilService.appareils;
  }

  onAllumer(){
    console.log("tout allumer");
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    console.log("tout éteinder");
    this.appareilService.switchOffAll();
  }
}
