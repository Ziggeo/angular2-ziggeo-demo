import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ZiggeoModule } from 'angular-ziggeo';

import { HomePageComponent } from './pages/home/home-page.component';
import { PlayerComponent } from './components/player/player.component';
import { RecorderComponent } from './components/recorder/recorder.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent, data: { title: 'Home page of demo page'} },
    { path: 'ziggeo-recorder', component: RecorderComponent, data: { title: 'Ziggeo Recorder Show Template'} },
    { path: 'ziggeo-player', component: PlayerComponent, data: { title: 'Ziggeo Player Show Template'} }
];


@NgModule({
  declarations: [
      AppComponent,
      HomePageComponent,
      PlayerComponent,
      RecorderComponent
  ],
  imports: [
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: false }
      ),
      BrowserModule,
      ZiggeoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
