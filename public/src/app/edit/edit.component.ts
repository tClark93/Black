import { HttpService } from '../http.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  editPet: {};
  errName = ""
  errSpec = ""
  errDesc = ""
  errS1 = ""
  errS2 = ""
  errS3 = ""

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this.loadItem()
    console.log(this.editPet)
  }

  // loadItem(){
  //   this._route.params.subscribe(params => {
  //     console.log(params);
  //     this._httpService.getOne(params.id).subscribe(pet => {
  //       console.log(pet['data'][0])
  //       this.editPet = pet['data'][0]
  //     });
  //   });
  // }

  loadItem(){
    this._route.params.subscribe(params => {
      console.log(params);
      this._httpService.getOne(params.id).subscribe(pet => {
        
        this.editPet = {
          _id: pet['data'][0]['_id'],
          name: pet['data'][0]['name'],
          species: pet['data'][0]['species'],
          description: pet['data'][0]['description'],
          skillOne: pet['data'][0]['skillOne'],
          skillTwo: pet['data'][0]['skillTwo'],
          skillThree: pet['data'][0]['skillThree'],
        }
      });
    });
  }

  edit(): void{
    console.log("this is the animal at edit", this.editPet)
    let observable = this._httpService.editItem(this.editPet);
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
        console.log(this.errSpec," ErrSpec")
      }
      else{
        console.log(data['data']);
        this._router.navigate(['/pets/', this.editPet['_id']])
      }
    });
    console.log(this.errName," ErrName")
    console.log(this.errSpec," ErrSpec")
  }

}
