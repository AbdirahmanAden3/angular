import { Component} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent{
  // t : Date = new Date()
  // angular : string = "Ali jamac";

  // sliceArr = ['itemA','itemB','ItemC','itemD']

  // emoloye = [
  //   {id : 1, name: "abdirahmaan aadan",state:'Califorina',salary: 122},
  //   {id : 2, name: "jamac adan",state:'Califorina',salary: 122},
  //   {id :3, name: "hamud adan",state:'Califorina',salary: 122},
  //   {id : 4, name: "sead Aadan",state:'Califorina',salary: 122}
  // ]

  // products : {name:string; imageUrl:string} [] = [
  //   {
  //     name : 'Html Css,Bootsrap',
  //     imageUrl : 'assets/angualr.jpg',
  //   },
  //   {
  //     name : "Master angular",
  //     imageUrl : "assets/angualr.jpg/"
  //   },
  //   {
  //     name : "Master html",
  //     imageUrl : "assets/html.jpg"
  //   },
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
    
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
    
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
    
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
    
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
    
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   },
  //   {
  //     name : "Master html with Marthon",
  //     imageUrl : "assets/html.jpg"
  //   }
    
   
  // ];

  // pageSize : number = 6;
  // startIndex: number = 0;
  // endIndex: number = this.pageSize;

  // previsous(){
  //   this.startIndex -= this.pageSize;
  //   this.endIndex  -= this.pageSize;
  // }

  //  nextPge(){
  //   this.startIndex += this.pageSize;
  //   this.endIndex += this.pageSize
  //  }

  Meter: number = 0; // Input value from the user
  kiloMeter: number = 0; // Converted value

  convertMeter() {
    this.kiloMeter = this.Meter / 1000; // Convert kilometers to meters
    

}
}