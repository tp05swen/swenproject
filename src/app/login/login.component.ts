import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 myForm: FormGroup;
 results: any = false;

 constructor(private fb: FormBuilder, private authService: AuthService,
private router: Router) {}



 ngOnInit() {
this.myForm = this.fb.group ({
name: '',
password: ''
});

 }

 onSubmit() {


this.authService.authUser(this.myForm.value.name,
this.myForm.value.password).subscribe(data => {
    this.results = data;
    if (this.results[0].auth) 
    {
        this.authService.setSecureToken(this.myForm.value.name);
        this.authService.setUserRole(this.results[0].role);
        this.authService.setUserID(this.results[0].userid);
        this.authService.setUser(this.myForm.value.name);
        this.router.navigateByUrl('/user');
        window.location.reload();

    
    }
    else{
        alert("Incorrect password or username.")
    };
    }
)
 }
}