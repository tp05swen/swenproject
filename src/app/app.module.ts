import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import { ContactusComponent } from './contactus/contactus.component'

import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from'@angular/material';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';

import { AuthService } from './auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { Browser } from 'protractor';
import { MatButtonModule, MatCardModule, MatLabel, MatFormFieldModule } from '@angular/material';
import { RoomsComponent } from './rooms/rooms.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { ExploreComponent } from './explore/explore.component';
import {HttpModule} from '@angular/http'
import {ModalModule} from "ng2-modal";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    UserComponent,
    ContactusComponent,
    RoomsComponent,
    ManageaccountComponent,
    ExploreComponent,
    

  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpModule,
    ModalModule,



  ],
  providers: [
    MatDatepickerModule,
    PostsService,
    MatLabel,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
