export class AppareilService {
  
    appareils = [
        {
          name: 'Iphone',
          status: false
        },
        {
          name: 'Xbox One',
          status: true
        },
        
      ];


      switchOnAll() {
        for(let appareil of this.appareils) 
          appareil.status = true;
    }
    
    switchOffAll() {
        for(let appareil of this.appareils) 
          appareil.status = false;
    }

    switchOnOne(i: number) {
      this.appareils[i].status = true;
      console.log("allume l'appareil a l'index " + i);

  }
  
  switchOffOne(i: number) {
      this.appareils[i].status = false;
      console.log("eteint l'appareil a l'index " + i);
  }
}