import { Component, OnInit } from '@angular/core';
import { SportDetailsService } from 'src/app/services/sport-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SportDetailsService) { }
  sportData:any;
  ngOnInit(): void {
    this.sportData = this.service.sportDetails;
  }

}
