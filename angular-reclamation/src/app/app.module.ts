import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { EmployesComponent } from './components/employes/employes.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { AjoutEmployeComponent } from './components/ajout-employe/ajout-employe.component';
import { ModifEmployeComponent } from './components/modif-employe/modif-employe.component';
import { ProfileComponent } from './components/profile/profile.component';
import {CardModule} from 'primeng/card';
import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { AjoutReclamationComponent } from './components/ajout-reclamation/ajout-reclamation.component';
import { TrashsComponent } from './components/trashs/trashs.component';
import { AjoutTrashComponent } from './components/ajout-trash/ajout-trash.component';
import { ModifTrashComponent } from './components/modif-trash/modif-trash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmployesComponent,
    AjoutEmployeComponent,
    ModifEmployeComponent,
    ProfileComponent,
    ReclamationComponent,
    AjoutReclamationComponent,
    TrashsComponent,
    AjoutTrashComponent,
    ModifTrashComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatBadgeModule,
    TableModule,
    ButtonModule,
    CardModule,
    ChartModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
