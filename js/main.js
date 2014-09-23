$(function () {
    "use strict";

    // "globals"
    var buffer_interval, //The interval used for checking whether or not to begin the bg video
        backgroundVideo = _V_("js-background_video", {
            "controls": false,
            "autoplay": true,
            "preload": "auto",
            "loop": true,
        }),
        modalVideo = _V_("js-modal_video", {
            "autoplay": true,
        });

    function windowSizeHandler() {
        var myAspectRatio = $(window).width() / $(window).height(),
            aspectRat = 192 / 108,
            tempH,
            tempW,
            popupTop,
            popupLeft;

        //Adjust heights of navigation menus
        $(".js-nav_menu_container").css('height', $(window).height() - 40 + 'px');

        if (myAspectRatio < aspectRat) {
            //window is too tall
            //Adjust bg video size and position
            backgroundVideo.size(Math.floor($(window).height() * aspectRat), $(window).height());
            $('#js-background_video').css({
                top: '0px',
                left: (($(window).width() - Math.floor($(window).height() * aspectRat)) / 2) + 'px',
            });

            //pop up
            tempW = Math.floor((8 / 10) * $(window).width());
            tempH = Math.floor((9 / 15.9) * tempW);
            modalVideo.size(tempW, tempH);
            popupTop = Math.floor(($(window).height() - tempH) / 2);
            popupLeft = Math.floor(($(window).width() - tempW) / 2);
            $('.js-modal_container').css({
                top: popupTop,
                left: popupLeft,
            });
        } else {
            //window is too wide (or has the correct aspect ratio)
            //Adjust bg video size and position
            backgroundVideo.size($(window).width(), Math.floor($(window).width() / aspectRat));
            $('#js-background_video').css({
                top: (($(window).height() - Math.floor($(window).width() / aspectRat)) / 2) + 'px', left: '0px',
            });

            //pop up
            tempH = Math.floor((8 / 10) * $(window).height());
            tempW = Math.floor((15.9 / 9) * tempH);
            modalVideo.size(tempW, tempH);
            popupTop = Math.floor(($(window).height() - tempH) / 2);
            popupLeft = Math.floor(($(window).width() - tempW) / 2);
            $('.js-modal_container').css({
                top: popupTop,
                left: popupLeft,
            });
        }
    }

    //starts opening sequence of effects
    function startBGMovie() {
        backgroundVideo = _V_("js-background_video");

        $(".js-loading").hide(); //Hide loading message
        $(".js-curtain").delay(1000).fadeOut(3000); //Fade in video
        $(".js-logo").delay(4000).fadeIn(1000); //Fade in logo
        $(".js-menu").delay(4000).fadeIn(1000); //Fade in menu
        $(".js-whitebar").delay(4000).fadeIn(1000); //Fade in white bar
    }

    //start playing the pop up video
    function playVideo(file) {
        var path = 'http://chrisgroban.com/client_review/mp4forsite/' + file + '.mp4';

        $('.js-modal_layer').show();

        modalVideo.src([{
            type: "video/mp4",
            src: path,
        }]);

        _V_("js-background_video").pause();
        $('.js-modal_container').fadeIn(500);
        modalVideo.play();
    }

    function bufferVideo() {
        backgroundVideo = _V_("js-background_video");
        var bufperc = backgroundVideo.bufferedPercent();
        $('.js-loading').append('.');

        if (bufperc === 1) {
            clearInterval(buffer_interval);
        }
    }

    buffer_interval = setInterval(function () {
        bufferVideo();
    }, 500);

    //Start once bg video is loaded
    backgroundVideo.addEvent("loadeddata", startBGMovie);

    // window sizing
    windowSizeHandler(); //Initial size
    $(window).bind("resize", windowSizeHandler); //Handle resize

    $('.js-play_video').click(function () {
        backgroundVideo.pause();
        playVideo($(this).attr('data-video-filename'));
    });

    $('.js-close_pop_up').click(function () {
        modalVideo.pause();
        $('.js-modal_layer').hide();
        $('.js-modal_container').hide();
        backgroundVideo.play();
    });
});
