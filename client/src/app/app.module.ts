import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';

const route: Route[] = [
  {path: 'client',
  component: ClientComponent},
  {path: '',
  component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
