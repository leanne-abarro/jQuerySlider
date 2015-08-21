$(function(){

    // setInterval
    // animate margin-left
    
    var width = "45em";
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    
    // caching the DOM
    
    var $slider = $("#slider");
    var $slideContainer = $slider.find(".slides");
    var $slides = $slideContainer.find(".slide");
    
    var interval;
    
    // listen for mouseenter and puase
    // resume on mouseleave
    
    function startSlider (){
        
        interval = setInterval(function (){
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
                currentSlide++;
                
                // goes back to 1 if on the last slide:
                
                if(currentSlide === $slides.length){
                    currentSlide = 1;
                    $slideContainer.css('margin-left',0);
                }
            });
        },pause);
    }
    
    function stopSlider (){
        
        clearInterval(interval);
    }
    
    $slider.on('mouseenter', stopSlider).on('mouseleave',startSlider);
    
    startSlider();
    
    // next and previous butttons
    


});