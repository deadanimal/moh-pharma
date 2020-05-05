import { Component, OnInit } from '@angular/core';
import { ROUTES, ROUTESUSER } from '../../shared/menu/menu-items';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  focus
  focus1

  email
  password
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.email == 'admin') {
      this.authService.userRole = 2
      this.router.navigate(['/admin/dashboard'])
    }
    else if (this.email == 'user') {
      this.authService.userRole = 1
      this.router.navigate(['/user/dashboard'])
    }
  }

}
