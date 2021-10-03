import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() public ParentData:string = "";

  @Output() public MyEvent = new EventEmitter() 
   public str:string = "";

  public fun()
  {
    this.MyEvent.emit(this.str);
  }
  ngOnInit(): void {
  }

}
