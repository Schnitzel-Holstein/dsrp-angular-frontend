import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/users.model'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private _users: UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this._users.loadUsers().subscribe(users => {this.users = users, console.log(users)});
  }

}