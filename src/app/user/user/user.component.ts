import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user.dto';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  _users: User[];
  _showUsers: boolean = true;

  toModifyUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.getAll().subscribe((data: User[]) => {
    //   console.log(data);
    // });

    this.loadUsersAsync();
  }

  private async loadUsersAsync() {
    const users: User[] = await this.userService.getAllAsync();
    console.log(users);
    this._users = users;
  }

  public updateUser(user) {
    console.log(`USPDATA USER: `, user);
    this._showUsers = false;
    this.toModifyUser = user;
  }

  public showUsers() {
    return this._showUsers;
  }

  public async onUpdateUserSubmit(form: NgForm) {
    console.log(form.value);
    this.toModifyUser.name = form.value.name;
    this.toModifyUser.surname = form.value.surname;
    this.toModifyUser.email = form.value.email;
    const updated = await this.userService.updateOne(this.toModifyUser);
    console.log('updated: ', updated);
    this._showUsers = true;
    this.toModifyUser = null;
    this.loadUsersAsync();
  }

}
