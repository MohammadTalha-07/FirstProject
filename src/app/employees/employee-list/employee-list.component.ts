import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private afdb: AngularFireDatabase, private empServ: EmployeeService, private router: Router) {
    
  }

  users:any[];

  persons = [
    { name: "sabhir ahmad bhat", age: 22, office: "Rangreth" },
    { name: "nasir ahmad bhat", age: 23, office: "Baramullah" },
    { name: "bilal ahmad bhat", age: 24, office: "Pampore" },
    { name: "hilal ahmad bhat", age: 82, office: "Srinagar" },
    { name: "amjid ali bhat", age: 2, office: "Shopain" }
  ]
  ngOnInit() {

    this.users = [];
    this.getAllItems();
    //inseritng in database(Create)
    //    let obj={name:"younis Sir",age:80};

    //without service
    //  this.afdb.list("/emp").push(obj); 
    // this.afdb.list("/persons").push({data:this.persons});

    //with service
    // this.empServ.insertIntoDatabase(obj)


    //insert 10 documents (rows/records) into collection (table) (emp2) 

    // for(let i=0; i< this.persons.length; i++){
    //   // let item ={name: "shabir ahmad bhat", age: i, };
    //   // this.empServ.insertIntoDatabase(this.persons[i])
    // }
  }


  addAnItem() {
    let obj = { name: "younis malik", age: 27 };
    this.empServ.insertIntoDatabase(obj);

  }

  // remove an element
  removeItem() {
    // this.afdb.list("/emp").remove("_ddaddadada");
    this.empServ.removeFromDatabase("-LH2Oq1SWo_2463fiOaQ");
  }

  updateItem() {
    let key = "-LH2Xpw05RnqkBv8R7iR";
    let obj = { name: "hilal malik", age: 82, qualification: "mca" };
    this.empServ.update(key, obj);
  }
  
  x= {name: "mohammad", age:"21"};
  key= "-LH2PWTjYN664kbJRp9r"
  TestInsert(){
    console.log("HELLO")
    this.empServ.TestInsertservice(this.x);
   
     }

  TestDelete(){
    this.empServ.TestDeleteService(this.elementToDelete)

  }
  elementToUpdate = "";
  TestUpdate(){
    let abc= {office:"kulgam"}
    this.empServ.TestUpdateService(this.elementToUpdate,abc)
  }
    


  elementToDelete = "";

  getAllItems() {
    console.log("called...")
   

    this.empServ.getAllItems().snapshotChanges().subscribe(records => {
      this.users = [];
      records.forEach(element => {
        console.log(element)
        var item  = element.payload.toJSON();
         item["key"] = element.key;  

        //  console.log(item["key"]);
        // //  console.log(item["name"]);
        //  if(item["age"] == 82){
        //    this.elementToDelete = item["key"];
        //   //  console.log(this.elementToDelete);
        //  }
        //  if(item["office"]=="Jammu"){
        //    this.elementToUpdate=item["key"]
        //    console.log(this.elementToUpdate)
        //  }

        console.log(item);;
         this.users.push(item);
      });
        console.log("---------------------",this.users.length);
    });
  }


  edit(emp){
    console.log(emp);
    this.empServ.setSelectedEmp(emp);
    this.router.navigate(['./employee/empForm']);
  }


  delete(key){
    console.log(key);

   let userChoosed = confirm("Are you sure to delete?");
   console.log(userChoosed);
   if(userChoosed){
     this.empServ.deleteTheEmployee(key);
     alert("Deleted Successfully");
   }
 
  }
}
