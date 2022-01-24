import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Challenge1Component } from './components/challenge_1/challenge_1.component';
import { Challenge2Component } from './components/challenge_2/challenge_2.component';
import { Challenge3Component } from './components/challenge_3/challenge_3.component';
import { Challenge4Component } from './components/challenge_4/challenge_4.component';
import { Challenge5Component } from './components/challenge_5/challenge_5.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'challenge_1', component: Challenge1Component},
  { path: 'challenge_2', component: Challenge2Component},
  { path: 'challenge_3', component: Challenge3Component},
  { path: 'challenge_4', component: Challenge4Component},
  { path: 'challenge_5', component: Challenge5Component},
  { path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Challenge1Component,
    Challenge2Component,
    Challenge3Component,
    Challenge4Component,
    Challenge5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
