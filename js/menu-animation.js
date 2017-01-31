/**
 * Created by plm7612 on 1/30/17.
 */
$(document).ready(function(){
    if( 'ontouchstart' in window ){ var click = 'touchstart'; }
    else { var click = 'click'; }


    $('.mobile-menu-toggle').on(click, function(){
        if( !$(this).hasClass('open') ){ openMenu(); }
        else { closeMenu(); }
    });


    $('div.menu ul li a').on(click, function(e){
        e.preventDefault();
        closeMenu();
    });

    function openMenu(){
        $('.mobile-menu-toggle').addClass('open');
        $('div.screen').addClass('animate');
        $('.menu').addClass('animate');
    }

    function closeMenu(){
        $('div.screen, .menu').removeClass('animate');
        $('.mobile-menu-toggle').removeClass('open');
    }
});
