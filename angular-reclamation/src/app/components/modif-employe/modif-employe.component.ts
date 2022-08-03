import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeService } from 'src/app/_services/employe.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-modif-employe',
  templateUrl: './modif-employe.component.html',
  styleUrls: ['./modif-employe.component.css']
})
export class ModifEmployeComponent implements OnInit {

  role : string = this.token.getUser().roles;
  form: any = {
    email: null,
  };
  isSuccessful = false;
  isAddFailed = false;
  errorMessage = '';

  constructor(private employeservice:EmployeService,
    private token:TokenStorageService,
    private router : ActivatedRoute,
    private route : Router
    ) { }

  ngOnInit(): void {
    if(this.role=='user' || this.role=='employe'){
      this.route.navigate(['/map'])
    }
    this.getemploye()
  }

  getemploye(){
    this.employeservice.getemployebyId(this.router.snapshot.params.id).subscribe(res=>{
      this.form = {
        email: res.email
      };
    })
  }
  onSubmit(): void {
    this.employeservice.updateEmploye(this.router.snapshot.params.id,this.form).subscribe(
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
