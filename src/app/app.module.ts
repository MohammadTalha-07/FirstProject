import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import{environment} from '../environments/environment';
import{ FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import{ EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './employees/shared/employee.service';
// forms
import { ReactiveFormsModule } from "@angular/forms";
// import{AppRoutingModule,routingcomponenets} from './app-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const myRoutes: Routes = [
  // {path: '', redirectTo: 'authentication', pathMatch: 'full'},
  { path: '', component: AuthenticationComponent, pathMatch: 'full' },
  { path: 'list', component: EmployeeListComponent }, 
  { path: 'employee/empForm', component: EmployeeComponent },
  { path: '**', component: PageNotFoundComponent }

    
  ];
  


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    AuthenticationComponent,
    PageNotFoundComponent
    // AppRoutingModule,

    
    

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
