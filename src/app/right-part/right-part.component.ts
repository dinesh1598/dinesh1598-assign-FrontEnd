import { Component, OnInit,Input } from '@angular/core';
interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['./right-part.component.css']
})




export class RightPartComponent implements OnInit {
  
  @Input('images')images: carouselImage[] = [];
  @Input() indicators=true;
  @Input() autoSlide=false;
  @Input() slideInterval=500;
  @Input()controls=true;

  selectedIndex=0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }
  autoSlideImages():void{
    setInterval(()=>{
      this.onNextClick();
    },this.slideInterval);
  }
  onNextClick():void{
    if(this.selectedIndex===this.images.length-1){
      this.selectedIndex=0;
    }
    else{
      this.selectedIndex++;
    }
  }
selectImage(index:number):void{
  this.selectedIndex=index

}
}


