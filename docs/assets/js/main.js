// Define variabls
var userAgent = navigator.userAgent; // get userAgent string
var isOpera = userAgent.indexOf("Opera") > -1; // jduge if Opera
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; // judge if IE
var isEdge = userAgent.indexOf("Edge") > -1; // judge if Edge
var isFF = userAgent.indexOf("Firefox") > -1; // judge if Firefox
var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; // judge if Safari
var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; // judge if Chrome

var navbar = $("#site-nav");
var topBtn = $("#topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if ($(window).scrollTop() >= 20) {
        topBtn.css("display", "block");
    } else {
        topBtn.css("display", "none");
    }

    if (isIE || isEdge) {
        // IE & EDGE
        navbar.removeClass("sticky-top");
    } else {
        if (navbar.offset().top - $(window).scrollTop() <= 1) {
            navbar.addClass("bg-lightone");
        } else {
            navbar.removeClass("bg-lightone");
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

/* For timeline
 –––––––––––––––––––––––––––––––––––––––––––––––––– */
(function() {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();

/* For iframe automatically define Height
 –––––––––––––––––––––––––––––––––––––––––––––––––– */
// function iframeLoad(frameId)  
// {  
//     frame = document.getElementById(frameId);
//     frame.height=0;  
//     frame.height=frame.contentWindow.document.body.scrollHeight;  
// }  

