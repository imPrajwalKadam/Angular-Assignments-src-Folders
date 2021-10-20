import { Component } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { nodeModuleNameResolver } from 'typescript';


@Component({
  selector: 'app-feed-back-form',
  templateUrl: './feed-back-form.component.html',
  styleUrls: ['./feed-back-form.component.css']
})
export class FeedBackFormComponent //implements OnInit
 {
  model: NgbDateStruct = {
    "year": 2021,
    "month": 9,
    "day": 15
  };

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  

 // constructor() { }

  //ngOnInit(): void {
  }

}
