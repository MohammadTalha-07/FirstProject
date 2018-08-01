import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../shared/employee.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Employee } from '../shared/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
empForm: FormGroup;//formgroup corresponds to form in the html 
Empid: FormControl;//field of the form
Name: FormControl; 
Residence: FormControl;
Salary: FormControl;

  constructor(public employeeservice:EmployeeService, private myRouter: Router) { }

  addEmployee(){
    console.log("add/update an employee");
    console.log(this.employeeservice.saveUpdateLabel);
    console.log(this.empForm.value)
    

    let formsValues = this.empForm.value;

    if(this.employeeservice.saveUpdateLabel == "Save"){
      console.log("saving");
      this.employeeservice.insertEmployeeDemo(formsValues);//pass value to the service which inturn pushes it in the database  
      //we can also write this.empForm.value in the method and it will automatically create an object.
    }else if(this.employeeservice.saveUpdateLabel == "Update"){
      console.log("updating..")
      console.log(formsValues);
      console.log(this.employeeservice.selectedEmployee.key)
      this.employeeservice.saveUpdateLabel = "Save";
      this.employeeservice.updateEmployeeDemo(this.employeeservice.selectedEmployee.key, formsValues);
      alert("Updated Successfully");
      
    }

    this.empForm.reset();


  }


  resetForm(){
    this.empForm.reset();
  }

  // [Validators.required, Validators.minLength(5)]
  ngOnInit() {
    this.Empid= new FormControl("", Validators.required);
    this.Name = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(16)]);
    this.Residence = new FormControl();
    this.Salary= new FormControl("");


    this.empForm= new FormGroup({

      // //BINDING TO THE HTML empid
      empid:this.Empid,
      name: this.Name,
      residence: this.Residence,
      salary: this.Salary
    })
   

  }


  showEmployees(){
    this.myRouter.navigate(['./list']);
  }

}
