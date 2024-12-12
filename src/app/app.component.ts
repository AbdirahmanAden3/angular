import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = "ff";
  nm : string = '';
  em : string = '';
  ph : string= '';
  add : string = '';
 showHeading : boolean = false;
  qualifications = [{school: '', degree:'', year :''}];
  submitted : boolean = false

  addQualification(){
    this.qualifications.push({school: '',degree: "", year:""})
  }

  submit() {
    this.submitted = true;
    this.showHeading =  false;
  }
  edit() {
    this.submitted = false;
    this.showHeading =  true;
  }

}



