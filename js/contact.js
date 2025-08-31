
google.maps.event.addDomListener(window, 'load', init);
function init() {
                var mapOptions = {
                  scrollwheel: false,
                    zoom: 13,

                    center: new google.maps.LatLng(40.7680748, -73.9867735),


                    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"weight":"0.20"},{"lightness":"28"},{"saturation":"23"},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#494949"},{"lightness":13},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#4d5f71"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#4d5f71"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#182a3c"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#2f4153"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#2e3741"},{"lightness":25}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#748ca5"},{"weight":"0.25"},{"saturation":"-74"},{"invert_lightness":true}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#4a5663"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#3f5163"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
                };


                var mapElement = document.getElementById('map');

                var map = new google.maps.Map(mapElement, mapOptions);

                const marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.7400748, -73.9867735),
                    animation: google.maps.Animation.DROP,
                    icon: 'img/marker.jpg',
                    map: map,
                    title: 'Office'
                });

                $("#office1").on('click touch', function(){
                    changeMarkerPos(marker, 55.8005214,37.5825216);
                    panMarkerPos(marker, 55.8005214,37.5825216);
                 });

                function changeMarkerPos(marker, lat, lon){
                    marker.setPosition(new google.maps.LatLng(lat, lon));
                }
                function panMarkerPos(marker, lat, lon) {
                    map.panTo(new google.maps.LatLng(lat, lon));
                }
}

google.maps.event.addDomListener(window, 'resize', init);
let Counter = 1;
function your_function(id){
  const getId = id.slice(-1);
  if (Counter != getId) {
    $('#office1').css( "font-weight", "100" );
    $('#' + id).css( "font-weight", "900" );
    $('#active_office').switchClass( "active_office" + Counter, "active_" + id, 200, "easeInOutQuad" );
    $('.office_info_' + Counter).css( "display", "none" );
    $('.office_info_' + getId).css( "display", "block" );
    Counter = getId;
  }
}

$(function() {

  // Get the form.
  var form = $('#ajax-contact');

  // Get the messages div.
  var formMessages = $('#contact_form');

  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      // Set the message text.
      $(formMessages).text(response);

      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#org').val('');
      $('#type').val('');
      $('#textarea-contact').val('');
    })
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });

  });

});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
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
