// Lógica do carrossel e dinamismo:

var isAnimating = false;

function scrollLeftAnimate(elem, unit) {

  if (!elem || isAnimating) {
    //if element not found / if animating, do not execute slide
    return;
  }

  var time = 300; // animation duration in MS, the smaller the faster.
  var from = elem.scrollLeft; // to continue the frame posistion
  var aframe =
    10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
  isAnimating = true; //if animating prevent double trigger animation

  var start = new Date().getTime(),
    timer = setInterval(function () {
      var step = Math.min(1, (new Date().getTime() - start) / time);
      elem.scrollLeft = ((step * unit) + from);
      if (step === 1) {
        clearInterval(timer);
        isAnimating = false;
      }
    }, aframe);
}



function initDealCarrousel() {
  var target =  vaCarrouselFlexbox.current;
  var cardOutterWidth;
  var maxCarrouselScroll;
// Coloque os refs
  function updateUpaCarrouselInfo() {
    cardOutterWidth = vaCardFirst.current.offsetWidth; //you can define how far the scroll
    maxCarrouselScroll = (vaCardAll.length *
      cardOutterWidth) - vaCarrouselFlexbox.current.clientWidth;
  }

  dealsScrollLeft.current.addEventListener("click",
    function () {
      updateUpaCarrouselInfo(); //in case window resized, will get new info
      if (target.scrollLeft > 0) {
        scrollLeftAnimate(target, - cardOutterWidth * 2);
      }
    }
  );

  dealsScrollRight.current.addEventListener("click",
    function () {
      updateUpaCarrouselInfo(); //in case window resized, will get new info 
      if (target.scrollLeft < maxCarrouselScroll) {
        scrollLeftAnimate(target, cardOutterWidth * 2);
      }
    }
  );
}
// Initiate the container with ID
initDealCarrousel(); //carrousel ID
