import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theater-form',
  templateUrl: './theater-form.component.html',
  styleUrls: ['./theater-form.component.css']
})
export class TheaterFormComponent implements OnInit {

  file:any = ''

  constructor() { }

  ngOnInit(): void {
  }

}
