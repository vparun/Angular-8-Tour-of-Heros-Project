import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes1',
  templateUrl: './heroes1.component.html',
  styleUrls: ['./heroes1.component.css']
})
export class Heroes1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hero:Hero={
    id:11,
    name:'Arunkumar'
  }

}
