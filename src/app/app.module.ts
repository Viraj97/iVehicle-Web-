import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { SearchEngineComponent } from './Components/search-engine/search-engine.component';
import { UserProfComponent } from './Pages/user-prof/user-prof.component';
import { ResultsComponent } from './Pages/results/results.component';
import { HomeComponent } from './Pages/home/home.component';
import { VoiceComponent } from './Components/voice/voice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    SearchEngineComponent,
    UserProfComponent,
    ResultsComponent,
    HomeComponent,
    VoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
