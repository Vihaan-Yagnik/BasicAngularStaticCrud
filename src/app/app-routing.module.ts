import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeesComponent } from './fees/fees.component';
import { InformationComponent } from './information/information.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { CrudComponent } from './crud/crud.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"menu" , component:MenuComponent},
  {path:"sidebar" , component:SidebarComponent},
  {path:"fees" , component:FeesComponent},
  {path:"info" , component:InformationComponent},
  {path:"calc" , component:CalculationsComponent},
  {path:"crud" , component:CrudComponent},
  {path:"register" , component:RegisterComponent},
  {path:"stu" , component:StudentComponent},
  {path: 'stu/:id', component: StudentDetailComponent }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
