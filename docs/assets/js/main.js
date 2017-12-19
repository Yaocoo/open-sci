// Define variabls
var userAgent = navigator.userAgent; // get userAgent string
var isOpera = userAgent.indexOf("Opera") > -1; // jduge if Opera
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; // judge if IE
var isEdge = userAgent.indexOf("Edge") > -1; // judge if Edge
var isFF = userAgent.indexOf("Firefox") > -1; // judge if Firefox
var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; // judge if Safari
var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; // judge if Chrome

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
}

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

