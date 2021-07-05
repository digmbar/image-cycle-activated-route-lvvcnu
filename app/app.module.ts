import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot([
    { path: '', redirectTo:'0', pathMatch: 'full' },
    { path: ':id', component: ImagesComponent }
  ])
  ],
  declarations: [ AppComponent, ImagesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
