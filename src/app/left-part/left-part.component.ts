import { Component, OnInit } from '@angular/core';
import data from '../json/data.json'

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.css']
})
export class LeftPartComponent implements OnInit {
  Description:{title:string,list:string}[]=data

  constructor() { }

  ngOnInit(): void {
  }

}

