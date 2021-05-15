import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jj-front-end';
  @Input() categorien: any;

  constructor(private apiService: ApiService){}

  ngOnInit(): void{
    this.apiService.getCategories().subscribe(_result => this.categorien = _result)
  }

  // Open and close sidebar
  open_menu(): void {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  close_menu(): void {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
}
