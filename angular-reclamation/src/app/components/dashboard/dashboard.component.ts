import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from 'src/app/_services/employe.service';
import { ReclamationService } from 'src/app/_services/reclamation.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { TrashService } from 'src/app/_services/trash/trash.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bardata: any;
  doughnutdata: any;
  employes !: number;
  users !: number;
  trashs!:number;
  reclamations!:number;
  role : string = this.token.getUser().roles;
  constructor(
    private serviceemploye: EmployeService,
    private servicereclamation: ReclamationService,
    private servicetrash: TrashService,
    private token:TokenStorageService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.role!='admin'){
      this.router.navigate(['/maps'])
    }
   this.getdata()
  }

  getdata(){
    this.serviceemploye.getEmployes().subscribe((employe)=>{
      this.employes = employe.length
    })
    this.serviceemploye.getallusers().subscribe((user)=>{
      this.users = user.length
    })
    this.servicereclamation.getReclamations().subscribe((reclamation)=>{
      this.reclamations = reclamation.length
      this.usedata(this.employes,this.users,this.trashs,this.reclamations)
    })
    this.servicetrash.getTrashs().subscribe((trash)=>{
      this.trashs = trash.length
      console.log(this.reclamations)

     
    })
  }

  usedata(emp:any,users:any,trash:any,rec:any){
    this.bardata = {
      labels: ['Bar Chart'],
      datasets: [
          {
              label: 'Employes',
              backgroundColor: '#289c77',
              data: [emp]
          },
          {
              label: 'Users',
              backgroundColor: '#8c46a9',
              data: [users]
          },
          {
              label: 'Trashs',
              backgroundColor: '#b36b39',
              data: [trash]
          },
          {
              label: 'Reclamations',
              backgroundColor: '#397dac',
              data: [rec]
          }
      ]
    }
    this.doughnutdata = {
      labels: ['Employes','Users','Trashs','Reclamations'],
      datasets: [
          {
              data: [emp,users,trash,rec],
              backgroundColor: [
                  "#289c77",
                  "#8c46a9",
                  "#b36b39",
                  "#397dac"
              ],
              hoverBackgroundColor: [
                  "#71dcba",
                  "#c97fe9",
                  "#e9af85",
                  "#78bff2"
              ]
          }
      ]
  };
  }

  
}
