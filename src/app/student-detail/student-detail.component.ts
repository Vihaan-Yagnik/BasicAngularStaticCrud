import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiStudentService } from '../api-student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent {
  constructor(private _route:ActivatedRoute , private _api:ApiStudentService){}
  id:any = "";
  stu:any = [{}]
  ngOnInit(){
    this.id = this._route.snapshot.paramMap.get("id")
    console.log(this.id)  

    this._api.getAll().subscribe((res:any)=>{
    this.stu = res})
  }
}
