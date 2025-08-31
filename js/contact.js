// Modernized Google Maps API usage with @googlemaps/js-api-loader
// This maintains the exact same functionality while using the latest API version

// Load Google Maps API dynamically
async function loadGoogleMapsAPI() {
    try {
        // Fetch API key from server
        const response = await fetch('api-config.php');
        const config = await response.json();
        const apiKey = config.googleMapsApiKey;
        
        const { Loader } = await import('https://unpkg.com/@googlemaps/js-api-loader@1.16.2/dist/index.min.js');
        
        const loader = new Loader({
            apiKey: apiKey,
            version: 'weekly',
            libraries: ['places']
        });

        await loader.load();
        init();
    } catch (error) {
        console.error('Failed to load Google Maps API:', error);
        // Fallback: try to load the old way if the new loader fails
        loadGoogleMapsAPIFallback();
    }
}

// Fallback method for backward compatibility
async function loadGoogleMapsAPIFallback() {
    if (typeof google !== 'undefined' && google.maps) {
        init();
        return;
    }
    
    try {
        // Fetch API key from server
        const response = await fetch('api-config.php');
        const config = await response.json();
        const apiKey = config.googleMapsApiKey;
        
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.onload = init;
        script.onerror = () => console.error('Failed to load Google Maps API');
        document.head.appendChild(script);
    } catch (error) {
        console.error('Failed to fetch API configuration:', error);
        // Ultimate fallback with hardcoded key
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAuC6uQvtDvk0xU3oHyrsd3Tt0iSD_Xiu8&libraries=places';
        script.onload = init;
        script.onerror = () => console.error('Failed to load Google Maps API');
        document.head.appendChild(script);
    }
}

// Initialize map when API is loaded
function init() {
    var mapOptions = {
        scrollwheel: false,
        zoom: 11,
        center: new google.maps.LatLng(55.7558, 37.6176), // Moscow, Russia
        language: 'ru',
        region: 'RU',
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"weight":"0.20"},{"lightness":"28"},{"saturation":"23"},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#494949"},{"lightness":13},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#4d5f71"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#4d5f71"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#182a3c"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#2f4153"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#2e3741"},{"lightness":25}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#748ca5"},{"weight":"0.25"},{"saturation":"-74"},{"invert_lightness":true}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#4a5663"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#3f5163"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    var lat;
    var lon;
    var myLatlng = new google.maps.LatLng(lat, lon);

    var marker = new google.maps.Marker({
        position: myLatlng,
        animation: google.maps.Animation.DROP,
        icon: 'img/marker.jpg',
        map: map,
        title: 'Office'
    });

    $("#office3").on('click touch', function() {
        changeMarkerPos(marker, 56.9542955, 24.1374494);
        panMarkerPos(marker, 56.9542955, 24.1374494);
    });
    
    $("#office2").on('click touch', function() {
        changeMarkerPos(marker, 55.83343, 49.05047);
        panMarkerPos(marker, 55.8540, 49.05047);
    });
    
    $("#office1").on('click touch', function() {
        changeMarkerPos(marker, 55.8005214, 37.5825216);
        panMarkerPos(marker, 55.8005214, 37.5825216);
    });

    function changeMarkerPos(marker, lat, lon) {
        marker.setPosition(new google.maps.LatLng(lat, lon));
    }
    
    function panMarkerPos(marker, lat, lon) {
        map.panTo(new google.maps.LatLng(lat, lon));
    }
    
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.7558, 37.6176), // Moscow, Russia
        animation: google.maps.Animation.DROP,
        icon: 'img/marker.jpg',
        map: map,
        title: 'Москва'
    });
}

// Load Google Maps API when window loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGoogleMapsAPI);
} else {
    loadGoogleMapsAPI();
}

// Handle window resize
google.maps.event.addDomListener(window, 'resize', init);

var Counter = 3;

function your_function(id) {
    var getId = id.substr(id.length - 8);
    if (Counter != getId) {
        $('#office1, #office2, #office3').css("font-weight", "100");
        $('#' + id).css("font-weight", "900");
        $('#active_office').switchClass("active_office" + Counter, "active_" + id, 200, "easeInOutQuad");
        $('.office_info_1, .office_info_2, .office_info_3').css("display", "none");
        $('.office_info_' + getId).css("display", "block");
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

// Smooth scrolling is now handled by utils.js
