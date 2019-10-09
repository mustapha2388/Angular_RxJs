import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable, interval, Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  
  secondes:number;
  title = 'angularServices';

  isAuth = true;
  mAppareils: any[];
  counterSubscription: Subscription;
  appareilSubcription: Subscription;

  constructor(private appareilService: AppareilService){}

  ngOnInit(): void {
    this.appareilSubcription= this.appareilService.appareilSubject.subscribe(
      (appareils:any[]) => {
        this.mAppareils =appareils;
      }
    );
    this.appareilService.emitAppareilSubject();


    const counter = interval(3000);
    this.counterSubscription = counter.subscribe(
      (value:number) => {
        this.secondes = value;
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

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
