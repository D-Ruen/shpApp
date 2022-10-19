import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

import { sliderData } from 'src/app/api/slider';
import { Slide } from 'src/app/models/slider';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {

  slider: Slide[] =sliderData;
  currentSlide: Slide = this.slider[0];
  currentIndex: number = 0;
  indexObs: Observable<number> =interval(5000);
  indexObsSub: Subscription |undefined;

  constructor() { }

  ngOnInit(): void {
    this.indexObsSub=this.indexObs.subscribe({
      next:(value:number)=>{
        this.handleChangeImage(1)
        },
        error:(error)=>{
          console.log("error : ",error)
        },
       } )

      

    }
     ngOnDestroy():void{
    this.indexObsSub?.unsubscribe()
  }

  handleChangeImage(index:number){
        
    let  newIndex;
    if(index===-1){
    newIndex =this.currentIndex-1
      if (newIndex>=0){
        this.currentIndex= newIndex
      }
      else{
        this.currentIndex=this.slider.length-1
      }
    }
    else{
      newIndex=this.currentIndex+1
      if(newIndex >this.slider.length-1){
        this.currentIndex=0
      }
      else{
        this.currentIndex=newIndex
      }
    }
  }
  }

 




