import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employe } from 'src/app/_models/employe';
import { EmployeService } from 'src/app/_services/employe.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  role : string = this.token.getUser().roles;
  employes !: employe[]
  constructor(private employeservice : EmployeService,private token:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if(this.role=='user' || this.role=='employe'){
      this.router.navigate(['/reclamation'])
    }
    this.getemployes()
  }
  getemployes()
  {
    this.employeservice.getEmployes().subscribe((employe)=>(this.employes = employe));
  }

  DeleteEmploye(id:any)
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
        this.employeservice.deleteEmploye(id).subscribe(()=>this.getemployes());
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
