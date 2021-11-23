import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { SearchCardComponent } from './Components/search-card/search-card.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeHeaderComponent } from './Components/home-header/home-header.component';
import { ChatbotComponent } from './Components/chatbot/chatbot.component';

import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { InstructionsComponent } from './Components/instructions/instructions.component';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: "mqtt.myweb.com",
  port: 1883,
  protocol: ("wss" === "wss") ? "wss" : "ws",
  path: '',
};

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
    VoiceComponent,
    SearchCardComponent,
    PaginationComponent,
    HomeHeaderComponent,
    ChatbotComponent,
    InstructionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
