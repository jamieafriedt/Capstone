import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import '../assessment-component/assessment-component.component.css';
@Component({
  
  selector: 'app-assessment-component',
  templateUrl: './assessment-component.component.html',
  styleUrls: ['./assessment-component.component.css']
})
export class AssessmentComponentComponent implements OnInit {

  @Input()
  count:number[] = [1,3,4,5,10,15,27];
  index = 0;
  input = "";
  b = "";
  
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  change2: EventEmitter<string> = new EventEmitter<string>();
  
  increment($event) {
    if($event.keyCode == 13) {
      this.change.emit(this.index);
      this.input = "1";
    }
   }
  
  constructor() { }

  ngOnInit() {
  }
}
