import {NgModule} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { NgModel } from '@angular/forms';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes :Routes = [
    {path:"/",component:AuthenticationComponent}
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]


})
export class AppRoutingModule{}
export const routingcomponenets = [AuthenticationComponent]




