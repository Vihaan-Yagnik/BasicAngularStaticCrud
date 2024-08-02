import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  stu : any = [{}]

  constructor(private _api:ApiStudentService , private _router: Router){}

  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      this.stu = res
      console.log(res)
    })
  }

  showmore(i :any){
    this._router.navigateByUrl("/stu/"+i)
  }

}
