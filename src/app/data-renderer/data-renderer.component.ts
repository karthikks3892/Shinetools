import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../values.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-renderer',
  templateUrl: './data-renderer.component.html',
  styleUrls: ['./data-renderer.component.css']
})
export class DataRendererComponent implements OnInit  {
  ngOnInit() {
    this.valueService.myMethod.subscribe((data) =>{
      this.data=data;
      
    }
    
  );
  }
    
    data;
  constructor(private valueService:ValuesService,private route:ActivatedRoute) {
  
   }
  
  }

