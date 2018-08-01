import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from '../employees/shared/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private myService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.username = new FormControl();
    this.password = new FormControl();

    this.loginForm  = new FormGroup({
      Username: this.username,
      Password: this.password
      
    })


    // let user = {name: "Amjid", password: "abcd", username:"1234"};
    // this.myService.insertDummyUsers(user);

    this.myService.testOrderByChild("talha").subscribe(records => {
      console.log(records);
    });
  }


  

  login(){

    let un = this.loginForm.value.Username;
    let pw = this.loginForm.value.Password;
    let authenticUser = false; 
    console.log(un, pw)
    this.myService.getAllUsers().snapshotChanges().subscribe(records => {


      for(let i=0; i<records.length; i++){

        var item  = <User> records[i].payload.toJSON();
        item["key"] = records[i].key;  
        console.log(item);
        
        if(item.username == un && item.password == pw){
          authenticUser = true; 
          break;          
        }else{
          authenticUser = false; 
        }
        
      }

      if(authenticUser){
        console.log("you ar ea good boy")
        this.router.navigate(["./employee/empForm"]);
      }else{
        alert("You username or password is wrong");
      }
      // records.forEach(element => {
        
      // });
    });

    console.log(this.loginForm.value);
  }

}


interface User{
  name:string, 
  password:string,
  username:string
}