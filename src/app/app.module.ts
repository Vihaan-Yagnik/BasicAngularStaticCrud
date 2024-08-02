import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FeesComponent } from './fees/fees.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { InformationComponent } from './information/information.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    FeesComponent,
    CalculationsComponent,
    InformationComponent,
    CrudComponent,
    RegisterComponent,
    StudentComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
