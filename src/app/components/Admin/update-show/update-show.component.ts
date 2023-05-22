import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from 'src/app/services/admin/show.service';

@Component({
  selector: 'app-update-show',
  templateUrl: './update-show.component.html',
  styleUrls: ['./update-show.component.css']
})
export class UpdateShowComponent implements OnInit {

  show:any = ''

  constructor(private route:ActivatedRoute, private showsService: ShowService) { 
    route.params.subscribe((params) => {
      showsService.getShow(params.id).subscribe((show:any) => {
        this.show = show;

        

      })
    })
  }

  ngOnInit(): void {
  }

}
