import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username:null,
    email: null,
    password: null
  };

  loginForm!: FormGroup;
  submitted: boolean = false;

  isLoggedIn = false;
  isRegisterFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private token: TokenStorageService,
    
    ){
  }

  ngOnInit(): void {
    if(this.token.getToken()){
      this.router.navigate(['/map'])
    }
  }


  onSubmit() {
    this.submitted = true;
    
    const { username, email, password} = this.form;

    
    this.authService.register(username,email, password,"user").subscribe(
      data => {        
        this.successfullyregister()
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
      }
    );  
    
    
  }

  successfullyregister(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Registration succesfully',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(function(){
      },2000,);
    this.router.navigate(['/login'])
  }
}
