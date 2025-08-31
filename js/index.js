$(function() {
    // animup();
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
    var saveButton=0;
    //page 3 4-button stuff
    $(".img_section_button").click(function(){
        index = $(".img_section_button").index(this);
        change_slide(index, saveButton);
        saveButton = index;
    });

    $("a.special[href=#]").on('click', function(e){
        e.preventDefault();
        if(saveButton<3) {
            index = saveButton+1;
            change_slide(index, saveButton);
            saveButton = index;
        } else {
            $('html,body').animate({
                scrollTop: $("#Screen_5").offset().top
            }, 1000);
        }
    });

    //fade ili animate za contents sled click na menuto
    /*var state = true;
    if (matchMedia) {
      var mq = window.matchMedia("(max-width:1199px)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }*/

    // fit_vertically($('.screen'));
    // $(window).resize(function(){
    //   fit_vertically($('.screen'));
    // });
});

function change_slide(index, saveButton) {
    if (index!=saveButton){
        //Content slide up
        $('.Screen_4_content_inner_'+index).stop().animate({opacity: 1,top: 0}, 700)
        $('.Screen_4_content_inner_'+saveButton).stop().animate({opacity: 0,top: -500}, 700, function() {
            $( this ).css( "top", "850px" );
        });
        //Background slide cycle
        $('#screen_4_background_'+saveButton).fadeOut(500);
        $('#screen_4_background_'+index).fadeIn(500);
        //Slider 1-4 img cycle
        $('#screen_4_toggle_slide_'+saveButton).fadeOut(500);
        $('#screen_4_toggle_slide_'+index).fadeIn(500);
        //Keeping count of what you clicked last time.
    }
}
// function fit_vertically($selector) {
//   windowHeight = $(window).height();
//   $selector.height(windowHeight);
// }

function animup() {
    // $('.fly').animate({ top: '-=20px' }, 800, animdown);
}

function animdown() {
    // $('.fly').animate({ top: '+=20px' }, 800, animup);
}
function WidthChange(mq){
    $('#menuToggle').click(function(){
        if (this.checked && mq.matches) {
            $('.Screen_1_content').stop().animate({marginRight: '70%'}, 600);
            state=true;
            $('.Screen_1_content').stop().fadeOut(400);
        }
        else{
            $('.Screen_1_content').stop().animate({marginRight: '0%'}, 600);
            state=false;
            $('.Screen_1_content').stop().fadeIn(400);
        }
    });
}
//360 drone
var droneArray=[];

for (i = 0; i <= 46; i++) {
    droneArray[i]="img/home/screen_5/drone_360/dr"+(i+1)+".png"
}
