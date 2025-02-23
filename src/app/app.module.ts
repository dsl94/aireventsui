import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MainComponent } from './components/main/main.component';
import { IndexComponent } from './pages/index/index.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { BorxloaderModule } from 'borxloader';
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
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AircraftMappingComponent } from './pages/aircraft-mapping/aircraft-mapping.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { ActivePillComponent } from './components/active-pill/active-pill.component';
import { RolePillComponent } from './components/role-pill/role-pill.component';
import {UserDetailsComponent} from "./pages/user-details/user-details.component";
import { ProfileComponent } from './pages/profile/profile.component';
import { RacesComponent } from './pages/races/races.component';
import { RaceDetailsComponent } from './pages/race-details/race-details.component';
import { RaceModalComponent } from './components/race-modal/race-modal.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditPasswordComponent } from './components/edit-password/edit-password.component';
import { RaceReportsComponent } from './pages/race-reports/race-reports.component';
import { RaceReportModalComponent } from './components/race-report-modal/race-report-modal.component';
import { ChallengesComponent } from './pages/challenges/challenges.component';
import { ChallengeDetailsComponent } from './pages/challenge-details/challenge-details.component';
import { ChallengeModalComponent } from './components/challenge-modal/challenge-modal.component';
import { AdminGuestsComponent } from './pages/admin-guests/admin-guests.component';
import { AdminGuestsTableComponent } from './components/admin-guests-table/admin-guests-table.component';
import { ConvertGuestModalComponent } from './components/convert-guest-modal/convert-guest-modal.component';
import {DataTablesModule} from "angular-datatables";
import { PublicChallengeComponent } from './pages/public-challenge/public-challenge.component';
import { EventsComponent } from './pages/events/events.component';
import { EventModalComponent } from './components/event-modal/event-modal.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventGoModalComponent } from './components/event-go-modal/event-go-modal.component';
import { ChangeDistanceModalComponent } from './components/change-distance-modal/change-distance-modal.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShopModalComponent } from './components/shop-modal/shop-modal.component';
import { OrderModalComponent } from './components/order-modal/order-modal.component';

const routes: Routes = [
  // osnovne rute
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'letnji-izazov', component: PublicChallengeComponent },
  { path: 'zimski-izazov', component: PublicChallengeComponent },
  {
    path: 'admin',
    component: IndexComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_SYSTEM_ADMIN'] },
    children: [
      {
        path: 'users', // child route path
        component: AdminUsersComponent, // child route component that the router renders
      },
      {
        path: 'user/:id', // child route path
        component: UserDetailsComponent, // child route component that the router renders
      },
      {
        path: 'guests', // child route path
        component: AdminGuestsComponent, // child route component that the router renders
      },
      {
        path: 'guests/:id', // child route path
        component: UserDetailsComponent, // child route component that the router renders
      },
      {
        path: 'profile', // child route path
        component: ProfileComponent, // child route component that the router renders
      },
      {
        path: 'races', // child route path
        component: RacesComponent, // child route component that the router renders
      },
      {
        path: 'race/:id', // child route path
        component: RaceDetailsComponent, // child route component that the router renders
      },
      {
        path: 'race-reports', // child route path
        component: RaceReportsComponent, // child route component that the router renders
      },
      {
        path: 'challenges', // child route path
        component: ChallengesComponent, // child route component that the router renders
      },
      {
        path: 'challenge/:id', // child route path
        component: ChallengeDetailsComponent, // child route component that the router renders
      },
      {
        path: 'events', // child route path
        component: EventsComponent, // child route component that the router renders
      },
      {
        path: 'event/:id', // child route path
        component: EventDetailsComponent, // child route component that the router renders
      },
      {
        path: 'shop', // child route path
        component: ShopComponent, // child route component that the router renders
      },
      // {
      //   path: 'aircrafts', // child route path
      //   component: AircraftListComponent, // child route component that the router renders
      // },
      // {
      //   path: 'flights', // child route path
      //   component: FlightListComponent, // child route component that the router renders
      // },
      // {
      //   path: 'spc', // child route path
      //   component: SpecialCargoListComponent, // child route component that the router renders
      // },
    ],
  },
  {
    path: 'airadmin',
    component: IndexComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] },
    children: [
      {
        path: 'pirep/:id', // child route path
        component: PirepComponent, // child route component that the router renders
      },
    ],
  },
  {
    path: 'guest',
    component: IndexComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_GUEST'] },
    children: [
      {
        path: 'profile', // child route path
        component: ProfileComponent, // child route component that the router renders
      },
      {
        path: 'challenges', // child route path
        component: ChallengesComponent, // child route component that the router renders
      },
      {
        path: 'challenge/:id', // child route path
        component: ChallengeDetailsComponent, // child route component that the router renders
      },
      {
        path: 'events', // child route path
        component: EventsComponent, // child route component that the router renders
      },
      {
        path: 'event/:id', // child route path
        component: EventDetailsComponent, // child route component that the router renders
      },
      ]
  },
  {
    path: 'user',
    component: IndexComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_USER'] },
    children: [
      {
        path: 'profile', // child route path
        component: ProfileComponent, // child route component that the router renders
      },
      {
        path: 'races', // child route path
        component: RacesComponent, // child route component that the router renders
      },
      {
        path: 'race/:id', // child route path
        component: RaceDetailsComponent, // child route component that the router renders
      },
      {
        path: 'race-reports', // child route path
        component: RaceReportsComponent, // child route component that the router renders
      },
      {
        path: 'challenges', // child route path
        component: ChallengesComponent, // child route component that the router renders
      },
      {
        path: 'challenge/:id', // child route path
        component: ChallengeDetailsComponent, // child route component that the router renders
      },
      {
        path: 'events', // child route path
        component: EventsComponent, // child route component that the router renders
      },
      {
        path: 'event/:id', // child route path
        component: EventDetailsComponent, // child route component that the router renders
      },
      {
        path: 'shop', // child route path
        component: ShopComponent, // child route component that the router renders
      },
    ],
  },
];

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
    LoginComponent,
    LogoutButtonComponent,
    AircraftMappingComponent,
    UserModalComponent,
    ConfirmModalComponent,
    UserTableComponent,
    AdminUsersComponent,
    ActivePillComponent,
    RolePillComponent,
    UserDetailsComponent,
    ProfileComponent,
    RacesComponent,
    RaceDetailsComponent,
    RaceModalComponent,
    EditProfileComponent,
    EditPasswordComponent,
    RaceReportsComponent,
    RaceReportModalComponent,
    ChallengesComponent,
    ChallengeDetailsComponent,
    ChallengeModalComponent,
    AdminGuestsComponent,
    AdminGuestsTableComponent,
    ConvertGuestModalComponent,
    PublicChallengeComponent,
    EventsComponent,
    EventModalComponent,
    EventDetailsComponent,
    EventGoModalComponent,
    ChangeDistanceModalComponent,
    ShopComponent,
    ShopItemComponent,
    ShopModalComponent,
    OrderModalComponent,
  ],
  imports: [
    BrowserModule,
    BorxloaderModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: 'BASE_API_URL', useValue: environment.apiUrl },],
  bootstrap: [AppComponent]
})
export class AppModule { }
