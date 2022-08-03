import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/_services/reclamation.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';



@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.css']
})
export class AjoutReclamationComponent implements OnInit {
  role : string = this.token.getUser().roles;
  form: any = {
    reclamation: null,
  };
  isSuccessful = false;
  constructor(private token:TokenStorageService,private reclamationservice : ReclamationService,private router:Router) { }

  ngOnInit(): void {
    if(this.role=='admin' || this.role=='employe'){
      this.router.navigate(['/reclamation'])
    }
  }

  onSubmit(): void {
    const { reclamation } = this.form;

    this.reclamationservice.addreclamation({"reclamation":reclamation,"id_user":this.token.getUser().id}).subscribe(
      data => {
        setTimeout(function(){
          window.history.back()
          }, 1000);
        console.log(data);
        this.isSuccessful = true;
      },
    );

  }
}
