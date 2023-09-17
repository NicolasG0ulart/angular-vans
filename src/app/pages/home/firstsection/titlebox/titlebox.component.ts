import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebox',
  templateUrl: './titlebox.component.html',
  styleUrls: ['./titlebox.component.css']
})
export class TitleboxComponent implements OnInit {

  textButton: string = 'DISCOVER NOW'
  iconName: string = 'chevron_right'

  constructor() { }

  ngOnInit(): void {
  }

}
