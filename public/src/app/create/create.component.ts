import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  newPet = {
    name: "", 
    species: "", 
    description: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
    likes: 0
  }
  errName = ""
  errSpec = ""
  errDesc = ""
  errS1 = ""
  errS2 = ""
  errS3 = ""

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  create(): void { 
    let observable = this._httpService.create(this.newPet)
    observable.subscribe(data => {
      console.log(data)
      if(data['message'] == "Error"){
        console.log('inside error conditional')
        this.errName = ""
        this.errSpec = ""
        this.errDesc = ""
        this.errS1 = ""
        this.errS2 = ""
        this.errS3 = ""
        for (let key in data['data']['errors']) {
          if(key == 'name'){
            this.errName = data['data']['errors']['name']['message']
          }
          if(key == 'species'){
            this.errSpec = data['data']['errors']['species']['message']
          }
          if(key == 'description'){
            this.errDesc = data['data']['errors']['description']['message']
          }
          if(key == 'skillOne'){
            this.errS1 = data['data']['errors']['skillOne']['message']
          }
          if(key == 'skillTwo'){
            this.errS2 = data['data']['errors']['skillTwo']['message']
          }
          if(key == 'skillThree'){
            this.errS3 = data['data']['errors']['skillThree']['message']
          }
        }
        console.log(this.errName," ErrName")
      }
      else{
        console.log(data['data']);
        this._router.navigate(['/pets'])
      }
    });
  }

}
