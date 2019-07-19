import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './../../../service/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {

  user: User;

  public userImage = "assets/img/users/user.jpg";
  constructor(private auth: AuthService) {
    if (this.auth.loggedIn()) {
      this.user = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
    }
  }

  ngOnInit() {
  }

}
