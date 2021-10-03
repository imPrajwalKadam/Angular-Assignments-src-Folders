import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() public MyEvent = new EventEmitter();
  public str:string = "";
  public fun()
  {
    this.MyEvent.emit(this.str);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
