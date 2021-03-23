import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

 jsonData =  [
      {
        dato: "Dato1"
      },
      {
        dato: "Dato2"
      },
      {
        dato: "Dato3"
      },
    ];

     columns = [
      "dato"
    ]
  constructor(private appService:AppService) { }



  ngOnInit() {
  }

generateScv(){
    this.appService.downloadFile(this.jsonData, this.columns, 'jsontocsv');
}
}