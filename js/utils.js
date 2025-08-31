/**
 * Utility functions for the Aeroxo website
 */

/**
 * Initialize smooth scrolling for anchor links
 * This function is used across multiple pages
 */
function initSmoothScrolling() {
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
}

// Auto-initialize when document is ready
$(document).ready(function() {
    initSmoothScrolling();
});
