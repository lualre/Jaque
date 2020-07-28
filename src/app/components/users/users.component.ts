import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { RolesService } from '../../services/roles-service.service';
import { User } from './user';
import { Roles } from './roles';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  myForm = new FormGroup({
    searchText: new FormControl(''),
    sort: new FormControl(true),
  });
  public users: User[];
  public roles: Roles[];

  constructor(private userService: UserService, private rolesService: RolesService) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers() {
    this.rolesService.getRoles().subscribe(response => this.roles = response.roles );
    this.userService.getUsers().subscribe(response => {
      this.users = response.users;
      this.users.forEach(user =>{
        this.roles.forEach(rol =>{
          if(user.roleId == rol.id){
            user.rol = rol.position;
            console.log(user);

          }
        });
      });

    });
  }

  resetForm(e) {
    if (e.target.checked) {
     this.myForm.reset();
    }
  }

}
