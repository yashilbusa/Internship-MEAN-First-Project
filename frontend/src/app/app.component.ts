import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message:any = ""
  tasks:any = [];


  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    //   this.apiservice.getMessage().subscribe((data:any)=>{
    //       this.message = data
    //   },(err:any)=>{
    //       console.error(err.message)
    //   }
    // );

    //   this.apiservice.fetchTask().subscribe((data:any)=>{
    //     this.tasks = data;
    //   },(err:any)=>{
    //       console.error(err.message)
    //   }
    // );

    this.apiservice.createTask().subscribe((data:any)=>{
      this.tasks = data;
    },(err:any)=>{
        console.error(err.message)
    }
  );

  }  
}