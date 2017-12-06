$(function(){
	
	/*=================================================================
        pricing switcher
    =================================================================*/

    $(".preview-switcher .landing").on('click', function() {
        $(".preview-switcher .multipage").removeClass('active');
        $(this).removeClass('active');
        $(this).addClass('active');
        $(".multipage-demo").css('display', 'none');
        $(".landing-demo").css('display', 'block');
    });

    $(".preview-switcher .multipage").on('click', function() {
        $(".preview-switcher .landing").removeClass('active');
        $(this).removeClass('active');
        $(this).addClass('active');
        $(".multipage-demo").css('display', 'block');
        $(".landing-demo").css('display', 'none');
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".navbar-default").slideDown("slow");
        } else {
            $(".navbar-default").slideUp("slow");
        }
    });

    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
         var targetOffset = $target.offset().top - 80;
         $('html,body')
         .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
    });

    var fullscreen = $(window).height();

    $(".fullscreen").css('height', fullscreen);

    $(window).resize(function() {
        $(".fullscreen").css('height', fullscreen);
    });


    // colorbox for single item preview
    /*$(".demo-colorbox").magnificPopup({
        type: 'ajax',

        fixedContentPos: true,
        fixedBgPos: true,

        overflowY: 'auto',
        preloader: true,

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        mainClass: 'my-mfp-zoom-in',

        gallery: {
            enabled: true, // set to true to enable gallery

            arrowMarkup: '<button title="%title%" class="preview-nav-%dir%"></button>', // markup of an arrow button

            tPrev: 'See Previous Demo', // title for left button
            tNext: 'See Next Demo', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });*/
});