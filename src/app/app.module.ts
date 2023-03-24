import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MainComponent } from './components/main/main.component';
import { IndexComponent } from './pages/index/index.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { FlightStatsCardComponent } from './components/flight-stats-card/flight-stats-card.component';
import { PirepComponent } from './pages/pirep/pirep.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { RegisterComponent } from './pages/register/register.component';
import { MandatoryStarComponent } from './components/mandatory-star/mandatory-star.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './pages/login/login.component';
import {AuthGuard} from "./helpers/auth.guard";
import {AuthInterceptor} from "./helpers/auth.interceptor";

const routes: Routes = [
  // osnovne rute
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: IndexComponent,
    children:
      [
        {path: 'pirep', component: PirepComponent}
      ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IndexComponent,
    HeaderComponent,
    SidebarComponent,
    NavHeaderComponent,
    ChatBoxComponent,
    FlightStatsCardComponent,
    PirepComponent,
    PageTitleComponent,
    RegisterComponent,
    MandatoryStarComponent,
    LogoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: 'BASE_API_URL', useValue: environment.apiUrl },],
  bootstrap: [AppComponent]
})
export class AppModule { }
