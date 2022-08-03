import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TrashService } from 'src/app/_services/trash/trash.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-modif-trash',
  templateUrl: './modif-trash.component.html',
  styleUrls: ['./modif-trash.component.css']
})
export class ModifTrashComponent implements OnInit {

  role : string = this.token.getUser().roles;
  form: any = {
    remplissage: null,
    longitude: null,
    latitude:null,
  };
  isSuccessful = false;
  isAddFailed = false;
  errorMessage = '';

  constructor(private trashservice:TrashService,
    private token:TokenStorageService,
    private router : ActivatedRoute,
    private route : Router
    ) { }

  ngOnInit(): void {
    if(this.role!='admin'){
      this.route.navigate(['/map'])
    }
    this.getemploye()
  }

  getemploye(){
    this.trashservice.getTrashbyId(this.router.snapshot.params.id).subscribe(res=>{
      this.form = {
        remplissage: res.remplissage,
        longitude: res.longitude,
        latitude:res.latitude,
      };
    })
  }
  onSubmit(): void {
    this.trashservice.updateTrash(this.router.snapshot.params.id,this.form).subscribe(
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
