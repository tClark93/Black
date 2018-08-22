import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/animals')
  }

  getOne(id){
    return this._http.get(`/animals/${id}`)
  }

  create(pet){
    console.log("inside post http service")
    console.log("inside http service product is", pet)
    return this._http.post('/animals', pet)
  }

  editItem(pet){
    console.log("inside service.ts")
    return this._http.put(`/animals/${pet._id}`, pet)
  }

  like(pet){
    console.log("made it to like in service file, new number of likes: ", pet._id)
    return this._http.put(`/animalx/${pet._id}`, pet)
  }

  delete(id){
    return this._http.delete('/animals/'+id)
  }

}
// module.exports = (app) => {
//   app.get("/animals", items.getAll)
//   app.get("/animals/:id",items.getOne)
//   app.post("/animals",items.create)
//   // app.post("/animals/:id",items.review)
//   app.put("/animals/:id",items.update)
//   app.delete("/animals/:id",items.delete)
//   app.all("*", (req,res,next) => {
//       res.sendFile(path.resolve("./public/dist/public/index.html"))
//   });
// }