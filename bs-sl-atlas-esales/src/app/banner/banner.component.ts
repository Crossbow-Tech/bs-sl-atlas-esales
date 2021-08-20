import { Component } from '@angular/core';
declare function  bannerExecution(): any;

@Component({  
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent{

  ngOnInit() {

    bannerExecution();

  }

}