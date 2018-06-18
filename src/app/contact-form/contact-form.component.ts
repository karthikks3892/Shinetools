import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../values.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];
 
  data;

  submit(f) {
    console.log(f.value);
    this.data = f.value;
    console.log(this.data);
  }
  
  constructor(private valueService: ValuesService) {
      
  }
  ngOnInit() {
    this.valueService.Method(this.data);
  }


}
