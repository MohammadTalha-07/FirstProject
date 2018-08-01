import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Employee } from './employee.model';
import { FirebaseOperation } from 'angularfire2/database/interfaces';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeelist:AngularFireList<any>;
  // selectedemployee:Employee = new Employee();
  public selectedEmployee: {key:String, name:String, residence: String, Salary: number}={key:"", name: "", residence: "", Salary:0};
  public saveUpdateLabel = "Save";

  constructor(private firebase:AngularFireDatabase) { }

  

  setSelectedEmp(emp){
    this.selectedEmployee = emp;
    console.log("emp =:  ", this.selectedEmployee);
    this.saveUpdateLabel ="Update";
  }

  insertEmployeeDemo(emp){
    this.firebase.list("/employeestable").push(emp)
  }

  insertDummyUsers(kuchbi){
    this.firebase.list("/users").push(kuchbi)
  }





  getData(){
this.employeelist = this.firebase.list('employees');
return this.employeelist;
  }
  insertEmployee(employee : Employee)
  {
   this.employeelist.push({
     name : employee.name,
     position :employee.position,
     office : employee.office,
     salary : employee.salary

   });
  }
   
   updateEmployee(employee:Employee)
   {
     this.employeelist.update(employee.$key,
     {
      name : employee.name,
     position :employee.position,
     office : employee.office,
     salary : employee.salary 
     });
    }
    deleteEmployee($key : string){
      this.employeelist.remove($key);
      
    }


    //
    insertIntoDatabase(item){
      this.firebase.list("/emp2").push(item)
    }


    //
    removeFromDatabase(key){
      this.firebase.list("/emp2").remove(key)
    }


    //
    update(key, item){
      this.firebase.list("/emp2").update(key,item)
    }
    TestUpdateService(key,item){
      this.firebase.list("/emp2").update(key,item)
    }

    TestInsertservice(item){
      this.firebase.list("/newlyCreatedTable").push(item)

    }

    TestDeleteService(key){
      this.firebase.list("/emp2").remove(key)
    }
   
// forms
//queries (different methods of getting data) ,
// routegaurd,async pipe
//removing all documents from any collection..


    getAllItems(){
      return this.firebase.list("/employeestable");
    }

    deleteTheEmployee(key){
      this.firebase.list("/employeestable").remove(key);
    }

    updateEmployeeDemo(key, emp){
      this.firebase.list("/employeestable").update(key, emp);
    }


    getAllUsers(){
      return this.firebase.list("/users");
    }

    testOrderByChild(name){
      return this.firebase.list('/users',
     ref => ref.orderByKey().equalTo("-LIeIOJHvRXZ7grN9SEm")).snapshotChanges();//order by key, change to order by child,also change the username that accepts the variable to the username or any parameter so that it may match the parameters.
    }
  
}

