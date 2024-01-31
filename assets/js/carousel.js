import Carousel from "./slider.js";

class CarouselSlide extends Carousel {
  constructor(...arg) {
    super(...arg);
    this.slidesContainer=this.slide[0].parentNode;
  }
  listeners () {
    super.listeners();
    this.slidesContainer.addEventListener("touchstart", this.swipeStart.bind(this));
    this.slidesContainer.addEventListener("touchend", this.swipeEnd.bind(this));
    this.slidesContainer.addEventListener("mousedown", this.swipeStart.bind(this));
    this.slidesContainer.addEventListener("mouseup", this.swipeEnd.bind(this));
  };
  
  //slide mouse+finger
  swipeStart (e) {
    this.xDown = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
  };
  
  swipeEnd (e) {
    this.xUp = e instanceof TouchEvent ? e.changedTouches[0].clientX : e.clientX;
    if (this.xDown - this.xUp > 100) this.prevAndPause();
    if (this.xDown - this.xUp < -100) this.nextAndPause();
  };
}
//event listeners


export default CarouselSlide