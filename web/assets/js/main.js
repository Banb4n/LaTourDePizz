$(document).ready(function() {
    $(".button-collapse").sideNav({
        menuWidth: 200, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true
    });
    $('.fixed-action-btn').openFAB();
    $('.fixed-action-btn').closeFAB();
    $('.parallax').parallax();
    $('.slider').slider();
});