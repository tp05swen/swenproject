import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class AuthService {
 constructor(private http: HttpClient) { }

 regUser(username: string, email: string, pw: string, role: string) {
 return this.http.get('/api/reguser/' + username + "/" + email + "/" + pw +"/" + role);
 }

 authUser(username: string, pw: string) {
 return this.http.get('/api/authuser/' + username + "/" + pw);
 }
 
 setSecureToken(secure_token: string) {
 sessionStorage.setItem("LoggedIn", secure_token)
 }

 getSecureToken() {
 return sessionStorage .getItem("LoggedIn")
 }

 setUserRole(role: string) {
 sessionStorage .setItem("UserRole", role);
 }

 getUserRole() {
 return sessionStorage .getItem("UserRole")
 }
 logout() {
 sessionStorage.removeItem("LoggedIn");
 sessionStorage.removeItem("UserRole");
 }
 
 isLoggedIn() {
    return this.getSecureToken() !== null;
}
   
isAdmin() {
    return (this.getUserRole() == "admin");
}
   
isUser() {
    return (this.getUserRole() == "user" || this.getUserRole() == "admin");
}
 
setUser(name: string) {
    sessionStorage .setItem("Username", name);
}

getUser() {
    return sessionStorage .getItem("Username");
}

setUserID(id: string) {
    sessionStorage .setItem("uid", id);
}

getUserID() {
    return sessionStorage .getItem("uid");
}

}