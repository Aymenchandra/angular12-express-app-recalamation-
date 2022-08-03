import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css']
})
export class AjoutEmployeComponent implements OnInit {
  role : string = this.token.getUser().roles;
  form: any = {
    username: null,
    email: null,
    password: null,
  };
  isSuccessful = false;
  isAddFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private token:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if(this.role=='user' || this.role=='employe'){
      this.router.navigate(['/map'])
    }
  }

  onSubmit(): void {
    const { username,email, password } = this.form;

    this.authService.register(username, email, password,"employe").subscribe(
      data => {
        setTimeout(function(){
          window.history.back()
          }, 1000);
        console.log(data);
        this.isSuccessful = true;
        this.isAddFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isAddFailed = true;
      }
    );

  }
}

