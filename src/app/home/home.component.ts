import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  i = 0;
  constructor() { }

  ngOnInit() {
    $(".slider__item").css({'transition':'left 1s ease-in-out','left':'0px'});
    $("#filo").css('transition','top .2s 10ms');
  }
  
  select_service(param){
    $(".option").removeClass("selected");
    $("."+param).addClass("selected");
  }
  slider(param){
    let ww = $(".slider").css('width');    
    if(param == 2){
      this.i--;
    }
    else{
      this.i++;
    }

    if(this.i<0){
      this.i = 0;
    }
    else if(this.i>3){
      this.i = 3;
    }  

    $(".slider__item").css({'transition':'left 1s ease-in-out','left':(-1)*(this.i)*parseFloat(ww)+'px'});
    
  }

  chatopen(){    
    $("#filo").css('top','0');
  }
  chatclose(){    
    $("#filo").css('top','100%');
  }

}
