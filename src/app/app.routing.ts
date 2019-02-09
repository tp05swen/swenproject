import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import home components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';
import {AuthGuard} from './auth.guard';
import { ExploreComponent } from './explore/explore.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
const appRoutes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'explore', component: ExploreComponent },
 { path: 'rooms', component: RoomsComponent },
 { path: 'manageaccount', component: ManageaccountComponent },
 { path: 'user', component: UserComponent, canActivate: [AuthGuard], data:
 {permission: {only: ["user", "admin"]}} },
 { path: 'login', component: LoginComponent} , 
 { path: 'logout', component: LogoutComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'contactus', component: ContactusComponent },
// redirect to home page on load
 { path: '', component: HomeComponent, pathMatch: 'full'}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);