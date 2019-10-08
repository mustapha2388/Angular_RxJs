import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {


  @Input() appareilName: string;
  @Input() appareilStatus: boolean;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }


  getStatus() {
    if (this.appareilStatus)
      return "Allumé";
    else
      return "Eteint";
  }



  getColor() {
    if (this.appareilStatus)
      return 'green';
    else
      return 'red';
  }

  onSwitch() {
    if (this.appareilStatus)
      this.appareilService.switchOffOne(this.index);
    else
      this.appareilService.switchOnOne(this.index);
  }

}
