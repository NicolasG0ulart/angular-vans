import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() textButton:string = '';
  @Input() iconName:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
