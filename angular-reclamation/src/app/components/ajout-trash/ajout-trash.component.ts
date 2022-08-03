import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrashService } from 'src/app/_services/trash/trash.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-ajout-trash',
  templateUrl: './ajout-trash.component.html',
  styleUrls: ['./ajout-trash.component.css']
})
export class AjoutTrashComponent implements OnInit {

  role : string = this.token.getUser().roles;
  form: any = {
    code: null,
    remplissage: null,
    longitude: null,
    latitude:null,
  };
  isSuccessful = false;
  errorMessage = "";
  isAddFailed = false;
  constructor(private token:TokenStorageService,private trashservice : TrashService,private router:Router) { }

  ngOnInit(): void {
    if(this.role!='admin'){
      this.router.navigate(['/reclamation'])
    }
  }

  onSubmit(): void {

    this.trashservice.addTrash(this.form).subscribe(
      data => {
        setTimeout(function(){
          window.history.back()
          }, 1000);
        this.isSuccessful = true;
        this.isAddFailed = false
      },err => {
        this.errorMessage = err.error.message;
        this.isAddFailed = true;
      }
    );
  }


}
