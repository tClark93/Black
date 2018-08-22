import { HttpService } from '../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-animal-id',
  templateUrl: './animal-id.component.html',
  styleUrls: ['./animal-id.component.css']
})

export class AnimalIDComponent implements OnInit {

  pet = {}
  flag = false

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.loadItem();
  }

  loadItem(){
    this._route.params.subscribe(params => {
      console.log(params);
      this._httpService.getOne(params.id).subscribe(pet => {
        this.pet = pet['data'][0]
      });
    });
  }

  like(){
    this.pet['likes'] = this.pet['likes']+1
    console.log(this.pet)
    let observable = this._httpService.like(this.pet)
    observable.subscribe(data => {
    console.log(data['data']);
    })
    this.loadItem();
    this.flag = true;
  }

  adopt(id): void { 
    console.log(id)
    let observable = this._httpService.delete(id)
    observable.subscribe(data => {
    console.log(data['data']);
    })
    this._router.navigate(['/pets'])
  }

}
