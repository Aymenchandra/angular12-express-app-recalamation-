import { Component, OnInit } from '@angular/core';
import { reclamation } from 'src/app/_models/reclamation';
import { ReclamationService } from 'src/app/_services/reclamation.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  role : string = this.token.getUser().roles;
  reclamations !: reclamation[]
  onereclamation !: any
  constructor(private reclamationservice : ReclamationService,private token:TokenStorageService) { }

  ngOnInit(): void {
    if(this.role == 'admin' || this.role == 'employe')
    {
      this.getReclamations()
    }
    if(this.role == 'user')
    {
      this.getOneReclamation()
      console.log(this.onereclamation)
    }
  }
  getReclamations()
  {
    this.reclamationservice.getReclamations().subscribe((reclamation)=>(this.reclamations = reclamation));
  }
  getOneReclamation()
  {
    this.reclamationservice.getOneReclamation(this.token.getUser().id).subscribe((reclamation)=>(this.onereclamation = reclamation));
  }

  DeleteReclamation(id:any)
  {
    this.confirmDelete(id)
  }
  confirmDelete(id:any){
    Swal.fire({
      title: 'Vous êtes sûr de vouloir supprimer?',
      text: 'Vous ne serez pas en mesure de récupérer ces données!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le !',
      cancelButtonText: 'Non, gardez-le.'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Supprimé!',
          'Ces données ont été supprimées.',
          'success'
        )
        // this.reclamationservice.deletereclamation(id).subscribe(()=>this.getReclamations());
        this.reclamationservice.deletereclamation(id).subscribe(()=>{
          this.getOneReclamation()
          this.getReclamations()
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Ces données est en sécurité :)',
          'error'
        )
      }
    })
  }

}
