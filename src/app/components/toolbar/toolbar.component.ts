import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{

  @Output() sideNav : EventEmitter<any> = new EventEmitter;

  
  constructor(){}

  ngOnInit(): void {
    
  }

  openSideNav(){
    
    this.sideNav.emit();

  }

}
