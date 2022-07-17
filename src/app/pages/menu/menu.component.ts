import { Component, OnInit } from '@angular/core';
import { SportDetailsService } from 'src/app/services/sport-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:SportDetailsService) { }
  sportData:any;
  ngOnInit(): void {
    this.sportData = this.service.sportDetails;
  }

}
