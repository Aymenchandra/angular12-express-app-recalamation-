import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showModeratorBoard = false;
  opened:boolean=true
  role !: string ;
  constructor(private tokenStorageService: TokenStorageService) { }

  
  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.role = this.tokenStorageService.getUser().roles;
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.role = "";
    setTimeout(() => {
      
    }, 100);
    window.location.reload();
  }

}
