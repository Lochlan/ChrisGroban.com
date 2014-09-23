/*jslint browser: true*/
/*jslint nomen: true*/
/*global $, jQuery, _V_*/
$(document).ready(function () {
    "use strict";
    //globals
    var buffer_interval,                //The interval used for checking whether or not to begin the bg video
        myPlayer = _V_("bg-video", { "controls": false, "autoplay": true, "preload": "auto", "loop": true }),
        myPlayer2 = _V_("video2", {"autoplay": true});

    function windowSizeHandler() {
        var winW = $(window).width(),
            winH = $(window).height(),
            myAspectRatio = winW / winH,
            aspectRat = 192 / 108,
            tempH,
            tempW,
            popupTop,
            popupLeft;

        $('#close-curtain').css({height: winH, width: winW});   //Adjust "curtain" size to be the same as the window
        $(".navmen").css('height', winH - 40 + 'px');           //Adjust heights of navigation menus

        if (myAspectRatio < aspectRat) {  //window is too tall
            //Adjust bg video size and position
            myPlayer.size(Math.floor(winH * aspectRat), winH);
            $('#bg-video').css({top: '0px', left: ((winW - Math.floor(winH * aspectRat)) / 2) + 'px'});

            //pop up
            tempW = Math.floor((8 / 10) * winW);
            tempH = Math.floor((9 / 15.9) * tempW);
            myPlayer2.size(tempW, tempH);
            popupTop = Math.floor((winH - tempH) / 2);
            popupLeft = Math.floor((winW - tempW) / 2);
            $('#pop-up-video').css({top: popupTop, left: popupLeft});
        } else { //window is too wide (or has the correct aspect ratio)
            //Adjust bg video size and position
            myPlayer.size(winW, Math.floor(winW / aspectRat));
            $('#bg-video').css({top: ((winH - Math.floor(winW / aspectRat)) / 2) + 'px', left: '0px'});

            //pop up
            tempH = Math.floor((8 / 10) * winH);
            tempW = Math.floor((15.9 / 9) * tempH);
            myPlayer2.size(tempW, tempH);
            popupTop = Math.floor((winH - tempH) / 2);
            popupLeft = Math.floor((winW - tempW) / 2);
            $('#pop-up-video').css({top: popupTop, left: popupLeft});
        }
    }

    function toHex(n) {
        n = Math.floor(n);
        if (isNaN(n)) {
            return "00";
        }
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    }

    function rgbToHex(R, G, B) { return toHex(R) + toHex(G) + toHex(B); }

    //starts opening sequence of effects
    function startBGMovie() {
        myPlayer = _V_("bg-video");

        $("#loading").hide();                           //Hide loading message
        $("#wrapcurtain").delay(1000).fadeOut(3000);    //Fade in video
        $("div#logo").delay(4000).fadeIn(1000);         //Fade in logo
        $("#menu").delay(4000).fadeIn(1000);            //Fade in menu
        $("#whitebar").delay(4000).fadeIn(1000);        //Fade in white bar
    }

    //start playing the pop up video
    function playVideo(filepath) {
        var winW = $(window).width(),
            winH = $(window).height();
        filepath = 'http://chrisgroban.com/client_review/mp4forsite/' + filepath + '.mp4';

        $('#curtain2').show();

        myPlayer2.src([
            { type: "video/mp4", src: filepath }
        ]);

        _V_("bg-video").pause();        //pause bg video
        $('#pop-up-video').fadeIn(500); //fade in pop-up video wrapper
        myPlayer2.play();               //start pop-up video
    }

    //handle opening the pop up video
    $('a.mytest').click(function () {
        myPlayer.pause();
        playVideo($(this).attr('data-vidurl'));
    });

    //Handle closing the pop up
    $('.close-pop').click(function () {
        var canvas = document.getElementById("canvas");
        canvas.width = document.width;      //Set canvas size
        canvas.height = document.height;

        myPlayer2.pause();                  //Close pop-up video
        $('#curtain2').hide();
        $('#pop-up-video').hide();

        myPlayer.play();                    //Start bg video
    });

    function bufferVideo() {
        myPlayer = _V_("bg-video");
        var bufperc = myPlayer.bufferedPercent();
        $('#loadnum').append('.');

        if (bufperc === 1) {
            clearInterval(buffer_interval);
        }
    }

    buffer_interval = setInterval(function () { bufferVideo(); }, 500);

    myPlayer.addEvent("loadeddata", startBGMovie);  //Start once bg video is loaded

    // window sizing
    windowSizeHandler();                            //Initial size
    $(window).bind("resize", windowSizeHandler);    //Handle resize
});
