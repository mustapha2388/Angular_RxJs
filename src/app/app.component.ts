import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, interval } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  secondes:number;
  title = 'angularServices';

  isAuth = true;
  mAppareils: any[];

  constructor(private appareilService: AppareilService){}

  ngOnInit(): void {
    this.mAppareils = this.appareilService.appareils;
    const counter = interval(1000);

    counter.subscribe(
      (value:number) =>{
        this.secondes= value;
      },
      (error:any) => {
        console.log("une erreur s'est produite : "+ console.error());
        
      },

      () => {
        console.log("Observable completed");
      }
    );
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
