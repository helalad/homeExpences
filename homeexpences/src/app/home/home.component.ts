import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { UserService } from "../user.service";
import { User } from "../user";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) { }
userfrom: User = new User();
submitted = false;
confirmPassword :String;
  ngOnInit(): void {
  }
  save() {  
    this.userService.addUser(this.userfrom)  
      .subscribe(data => console.log(data), error => console.log(error));  
      this.submitted =true;
    this.userfrom = new User();  
  }  
}
