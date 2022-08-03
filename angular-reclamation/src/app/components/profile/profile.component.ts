import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/_services/employe.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form: any = {
    username:null,
    email: null,
  };
  errorMessage = '';
  role= this.token.getUser().roles;

  constructor(
    private user: EmployeService,
    private token: TokenStorageService,
    private router: Router,
  
    ){
  }

  ngOnInit(): void {
    if(this.role=='user'){
      this.router.navigate(['/map'])
    }
    this.getbyid()
  }

  getbyid()
  { 
    this.user.getemployebyId(this.token.getUser().id).subscribe((res)=>{
      this.form = {
        username:res.username,
        email: res.email,
      };
    })
  }
}
