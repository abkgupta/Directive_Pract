import { Component } from '@angular/core';

@Component({
  selector: 'app-nstyle',
  templateUrl: './nstyle.component.html',
  styleUrls: ['./nstyle.component.css']
})
export class NstyleComponent {
  
  //  title: string = "This is the Title"
    multistyle = {
      'background': 'red',
      'border': '10px solid green'
    }
}
