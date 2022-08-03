import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrashService } from 'src/app/_services/trash/trash.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';
import { trash } from 'src/app/_models/trash';

@Component({
  selector: 'app-trashs',
  templateUrl: './trashs.component.html',
  styleUrls: ['./trashs.component.css']
})
export class TrashsComponent implements OnInit {

  role : string = this.token.getUser().roles;
  trashs !: trash[]
  constructor(private trashservice : TrashService,private token:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.gettrashs()
  }
  gettrashs()
  {
    this.trashservice.getTrashs().subscribe((trash)=>(this.trashs = trash));
  }

  DeleteTrash(id:any)
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
        this.trashservice.deleteTrash(id).subscribe(()=>this.gettrashs());
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
