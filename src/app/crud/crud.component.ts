import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  dum = ["vihaan" , "vivek" , "jenish"]
  editIndex = 0
  upId = -1;

  myName=""

  addstudent(){
    this.dum.push(this.myName)
    this.myName="";
  }

  editstudent(){
    this.dum[this.editIndex] = this.myName
    this.myName="";
    this.upId = -1
  }

  set(i : any){
    this.myName = this.dum[i]
    this.editIndex = i
    this.upId = 1;
  }

  del(i : any){
    this.dum.splice(i,1)
  }
}
