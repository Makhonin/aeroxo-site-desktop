$(document).ready(function() {
  $('#bg-video').backgroundVideo({
      pauseVideoOnViewLoss: false,
      minimumVideoWidth: 1920,
      parallaxOptions: {
          effect: 1.9
      }
  });
  // fit_vertically($('.screen'));
  // $(window).resize(function(){
  //   fit_vertically($('.screen'));
  // });
});

$(window).load(function () {

    var layers = $('.rotor').get();
    var layersCount = layers.length;
    var master = [];
    for(var i = 0; i < layersCount; i++) {
       master[i] = {
           speed : 0.1 - (i / layersCount),
           pos : $(layers[i]).position()
       }

    }

    var top;
    var left;
    var winWidth;
    var docWidth;
    var winHeight;
    var percentLeft;
    var percentTop;
    var absPercent;

    winHeight = $(window).height();
    winWidth = $(window).width();
    docWidth = $(document).width();
    absPercent = (winWidth / docWidth);
    $(window).scroll(function () {

       top = $(this).scrollTop();
       left = $(this).scrollLeft();

       for(var t = 0; t < layersCount; t++) {
           percentLeft = (left / winWidth) * master[t].speed;
           percentTop = (top / winHeight) * master[t].speed;

           var newPositionLeft = master[t].pos.left - (percentLeft * master[t].pos.left);
           var newPositionTop = (master[t].pos.top - 900 ) - (percentTop * master[t].pos.top);

           $(layers[t]).css({"top":newPositionTop});

       }
    });
  $(window).scrollTop($(window).scrollTop()+1);//fixes initial rotor position
  $(window).scrollTop($(window).scrollTop()-1);//fixes initial rotor position
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



(function($) {
  $.fn.isOnScreen = function(x_offset, y_offset) {
    if(x_offset == null || typeof x_offset == 'undefined') x_offset = 1;
    if(y_offset == null || typeof y_offset == 'undefined') y_offset = 1;

    var win = $(window),
        viewport = {
          top : win.scrollTop(),
          left : win.scrollLeft()
        },
        height = this.outerHeight(),
        width = this.outerWidth(),
        bounds = this.offset(),
        visible,
        deltas;

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    if(!width || !height) return false;

    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    visible = (
      !(viewport.right < bounds.left ||
      viewport.left > bounds.right ||
      viewport.bottom < bounds.top ||
      viewport.top > bounds.bottom)
    );

    if(!visible) return false;

    deltas = {
      top:    Math.min(1, (bounds.bottom - viewport.top) / height),
      bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
      left:   Math.min(1, (bounds.right - viewport.left) / width),
      right:  Math.min(1, (viewport.right - bounds.left) / width)
    };

    return (deltas.left * deltas.right) >= x_offset && (deltas.top * deltas.bottom) >= y_offset;
  };
})(jQuery);




//
$(function () {
  // if( $('.cd-section:nth-child(5)').hasClass('visible') ) {
  //   // Display contact form/animate in/change user focus etc...
  //   if ($(window).height() < 900) {
  //     $('#terrain').animate({top: 390}, 500, function() {
  //       $('#terrain').animate({top: 420}, 200);
  //     })
  //     $('#schema').delay(800).animate({top: 190}, 500, function() {
  //       $('#schema').animate({top: 220}, 200);
  //     })
  //   } else {
  //     $('#terrain').animate({top: 470}, 500, function() {
  //       $('#terrain').animate({top: 500}, 200);
  //     })
  //     $('#schema').delay(800).animate({top: 270}, 500, function() {
  //       $('#schema').animate({top: 300}, 200);
  //     })
  //   }
  // }

  // $('#TriggerAnim').one('inview', function (event, visible) {
  //   console.log('inview');
  //   if (visible) {
  //
  //     // bottom part of element is visible
  //     if ($(window).height() < 950) {
  //       $('#terrain').animate({top: 390}, 500, function() {
  //         $('#terrain').animate({top: 420}, 200);
  //       })
  //       $('#schema').delay(800).animate({top: 190}, 500, function() {
  //         $('#schema').animate({top: 220}, 200);
  //       })
  //     } else {
  //       $('#terrain').animate({top: 470}, 500, function() {
  //         $('#terrain').animate({top: 500}, 200);
  //       })
  //       $('#schema').delay(800).animate({top: 270}, 500, function() {
  //         $('#schema').animate({top: 300}, 200);
  //       })
  //     }
  //   }
  // });
});
$(document).ready(function() {
    $('.shuffle').shuffleLetters();
});
//vertigal fit
// function fit_vertically($selector) {
//   windowHeight = $(window).height();
//   $selector.height(windowHeight);
// }
