import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEmployeComponent } from './components/ajout-employe/ajout-employe.component';
import { AjoutReclamationComponent } from './components/ajout-reclamation/ajout-reclamation.component';
import { AjoutTrashComponent } from './components/ajout-trash/ajout-trash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployesComponent } from './components/employes/employes.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { ModifEmployeComponent } from './components/modif-employe/modif-employe.component';
import { ModifTrashComponent } from './components/modif-trash/modif-trash.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { RegisterComponent } from './components/register/register.component';
import { TrashsComponent } from './components/trashs/trashs.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent, },
  { path: 'employes', component: EmployesComponent,canActivate:[AuthGuard]},
  { path: 'ajoutemploye', component: AjoutEmployeComponent,canActivate:[AuthGuard] },
  { path: 'ajoutreclamation', component: AjoutReclamationComponent,canActivate:[AuthGuard] },
  { path: 'ajouttrash', component: AjoutTrashComponent,canActivate:[AuthGuard] },
  { path: 'modifier/:id', component: ModifEmployeComponent,canActivate:[AuthGuard] },
  { path: 'modifiertrash/:id', component: ModifTrashComponent,canActivate:[AuthGuard] },
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard] },
  { path: 'reclamation', component: ReclamationComponent,canActivate:[AuthGuard] },
  { path: 'trash', component: TrashsComponent,canActivate:[AuthGuard] },
  { path: 'map', component: MapComponent,canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
