import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodelexp',
  templateUrl: './ngmodelexp.component.html',
  styleUrls: ['./ngmodelexp.component.css']
})
export class NgmodelexpComponent {
  title: string = "This is the Title" 
  onEvent(event: any){
    console.log(event.target.value)
     this.title = event.target.value
  }
}
