import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  pets = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void { 
    let observable = this._httpService.getAll()
    observable.subscribe(data => {
    console.log(data)
    this.pets = data['data'];
    console.log("these are the pets ",this.pets)
    })
  } 

}
