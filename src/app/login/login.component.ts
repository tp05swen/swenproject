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
 myForm2: FormGroup;
 results: any = false;

 constructor(private fb: FormBuilder, private authService: AuthService,
private router: Router) {}



 ngOnInit() {
this.myForm = this.fb.group ({
name: '',
password: ''
});
this.myForm2 = this.fb.group ({
    name: '',
    password: ''
    });
 }

 onSubmit() {

    alert("Account has been created.")

    
    }

    onSubmit2() {

        alert("Login successful.")
    
        
        }

}