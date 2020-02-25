/**
 * WPGL Slider Js
 *
 * Includes function for slick slider
 * init with settings
 *
 * @version 1.2.1
 * @author Memorres digital pvt. ltd.
 * @package WPGL v1.0
 *
 */

(function($){

  $.fn.initSlider = function() {


    $(this).each(function(){

      /* override values based on data attr in div */

      var $this = $(this);

      var slidesToShow = $this.attr('data-slidestoshow') ? $this.attr('data-slidestoshow') : 1;
      var slideInfniteScroll = $this.attr('data-infinite') ? true : false;
      var slideCenterMode = $this.attr('data-centermode') ? true : false;
      var slideCenterPadding = $this.attr('data-centermode') ? '3%' : '';
      var slidesToScroll = $this.attr('data-slidestoscroll') ? $this.attr('data-slidestoscroll') : 1;
      var sliderControl = $this.attr('data-controls') ? $this.attr('data-controls') : false;
      var prevArrow = $('[data-jsclickevent="slick-prev"]');
      var nextArrow = $('[data-jsclickevent="slick-next"]');
      var mouseScroll = $this.attr('data-mousescroll') ? $this.attr('data-mousescroll') : false;
      var slideSpeed = $this.attr('data-slidespeed') ? parseInt ($this.attr('data-slidespeed')) : 1000;
      var sliderTransition = $this.attr('data-fade') ? true : false;
      var autoPlay = $this.attr('data-autoplay') ? $this.attr('data-autoplay') : false;
      var touchThreshold = 1000;
      var getMobileSlides = $this.attr('data-slidestoshowinmobile') ? $this.attr('data-slidestoshowinmobile') : 1;
      var getTabletSlides = $this.attr('data-slidestoshowintablet') ? $this.attr('data-slidestoshowintablet') : 1;
      var getLaptopSlides = $this.attr('data-slidestoshowinlaptop') ? $this.attr('data-slidestoshowinlaptop') : 1;


      var currentSlideSelector = $('.c-banner__counter-current');
      var totalSlideSelector = $('.c-banner__counter-total');
      var totalSlideCount = '';
      var currentSlideCount = '';

      var responsiveINIT = '';

      if( slidesToShow > 1 ) {

        responsiveINIT = [
         {
           breakpoint: 767,
           settings: {
             slidesToShow: getMobileSlides,
           },

         },

         {
           breakpoint: 1024,
           settings: {
             slidesToShow: getTabletSlides,
           },
         },

         {
           breakpoint: 1440,
           settings: {
             slidesToShow: getLaptopSlides,
           },
         },

       ];

      }


      if($this.children().length > 1) {

        if($this.find('.c-banner__counter').length > 1) {

          $this.on('init afterChange beforeChange', function(event, slick, currentSlide, nextSlide){

              //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
              var i = (currentSlide ? currentSlide : 0) + 1;

              if (i.toString().length === 1) {
                currentSlideCount = "0" + i;
              } else {
                currentSlideCount = i;
              }

              if (slick.slideCount.toString().length === 1) {
                totalSlideCount = "0" + slick.slideCount;
              } else {
                totalSlideCount = slick.slideCount;
              }

              $this.find(currentSlideSelector).text(currentSlideCount);
              $this.find(totalSlideSelector).text(totalSlideCount);

          });
        }

        $this.slick({
           infinite:slideInfniteScroll,
           slidesToShow: slidesToShow,
           slidesToScroll: slidesToScroll,
           fade: sliderTransition,
           autoplay: autoPlay,
           autoplaySpeed: slideSpeed*1000,
           dots: false,
           arrows: false,
           centerMode: slideCenterMode,
           centerPadding: slideCenterPadding,
           touchThreshold: touchThreshold,
           responsive: responsiveINIT
        });

        prevArrow.click(function(){
          $(this).parent().parent().find('.slick-slider').slick('slickPrev');
        });

        nextArrow.click(function(){
          $(this).parent().parent().find('.slick-slider').slick('slickNext');
        });

      } else {

        // prevArrow.remove();
        // nextArrow.remove();
        $this.find('.c-banner__counter').remove();

      }

    });
  };

})(jQuery);
