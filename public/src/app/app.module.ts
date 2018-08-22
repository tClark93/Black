import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { OrderModule } from 'ngx-order-pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AnimalIDComponent } from './animal-id/animal-id.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    CreateComponent,
    EditComponent,
    AnimalIDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
