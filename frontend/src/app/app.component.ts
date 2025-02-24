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
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
      this.apiservice.getMessage().subscribe((data:any)=>{
          this.message = data
      },(err:any)=>{
          console.error(err.message)
      }
    );
  }
}
