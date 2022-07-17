import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportDetailsService } from 'src/app/services/sport-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:SportDetailsService) { }
  getSportId:any;
  sportData:any;

  ngOnInit(): void {
    this.getSportId = this.param.snapshot.paramMap.get('id');
    console.log(this.getSportId,'getsport');
    if(this.getSportId)
    {
      this.sportData =  this.service.sportCaptain.filter((value: { id: any; })=>{
          return value.id == this.getSportId;
        });
        console.log(this.sportData,'sportdata>>');

    }

  }

}
