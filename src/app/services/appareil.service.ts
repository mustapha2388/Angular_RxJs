import { Subject } from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any[]>();
 
  private appareils = [
    {
      name: 'Iphone',
      status: false
    },
    {
      name: 'Xbox One',
      status: true
    },

  ];

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }


  switchOnAll() {
    for (let appareil of this.appareils)
      appareil.status = true;
      this.emitAppareilSubject();
      }

  switchOffAll() {
    for (let appareil of this.appareils)
      appareil.status = false;
      this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = true;
    console.log("allume l'appareil a l'index " + i);
    //this.emitAppareilSubject();
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = false;
    console.log("eteint l'appareil a l'index " + i);
    this.emitAppareilSubject();
  }
}