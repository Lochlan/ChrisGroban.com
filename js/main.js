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
        var windowAspectRatio = $(window).width() / $(window).height(),
            desiredAspectRatio = 192 / 108,
            backgroundHeight,
            backgroundWidth,
            backgroundTop,
            backgroundLeft,
            modalHeight,
            modalWidth;

        //Adjust heights of navigation menus
        $(".js-nav_menu_container").css('height', $(window).height() - 40 + 'px');

        if (windowAspectRatio < desiredAspectRatio) {
            //window is too tall
            backgroundWidth = Math.floor($(window).height() * desiredAspectRatio);
            backgroundHeight = $(window).height();
            backgroundTop = 0;
            backgroundLeft = (($(window).width() - backgroundWidth) / 2) + 'px';
            modalWidth = Math.floor((8 / 10) * $(window).width());
            modalHeight = Math.floor((9 / 15.9) * modalWidth);
        } else {
            //window is too wide (or has the correct aspect ratio)
            backgroundWidth = $(window).width();
            backgroundHeight = Math.floor($(window).width() / desiredAspectRatio);
            backgroundTop = (($(window).height() - backgroundHeight) / 2) + 'px'
            backgroundLeft = 0;

            modalHeight = Math.floor((8 / 10) * $(window).height());
            modalWidth = Math.floor((15.9 / 9) * modalHeight);
        }

        backgroundVideo.size(backgroundWidth, backgroundHeight);
        $('#js-background_video').css({
            top: backgroundTop,
            left: backgroundLeft,
        });

        modalVideo.size(modalWidth, modalHeight);
        $('.js-modal_container').css({
            top: Math.floor(($(window).height() - modalHeight) / 2),
            left: Math.floor(($(window).width() - modalWidth) / 2),
        });
    }

    //starts opening sequence of effects
    function startBGMovie() {
        $(".js-loading_message").hide(); //Hide loading message
        $(".js-fade_in").delay(1000).fadeOut(3000); //Fade in video
        $(".js-logo, .js-menu, .js-whitebar").delay(4000).fadeIn(1000); //Fade in logo, menu ,and white bar
    }

    //start playing the pop up video
    function playModalVideo(file) {
        $('.js-modal_layer').show();

        modalVideo.src([{
            type: "video/mp4",
            src: file,
        }]);

        _V_("js-background_video").pause();
        $('.js-modal_container').fadeIn(500);
        modalVideo.play();
    }

    function bufferVideo() {
        $('.js-loading_message').append('.');

        if (backgroundVideo.bufferedPercent() === 1) {
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
        playModalVideo($(this).data('video'));
    });

    $('.js-close_modal').click(function () {
        modalVideo.pause();
        $('.js-modal_layer').hide();
        $('.js-modal_container').hide();
        backgroundVideo.play();
    });
});
