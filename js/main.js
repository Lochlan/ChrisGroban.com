/*jslint browser: true*/
/*global $, jQuery*/
/*jslint nomen: true*/
$(document).ready(function () {
    "use strict";
    //globals
    var canvas = document.getElementById("canvas"),
        winW = $(window).width(),
        winH = $(window).height(),
        buffer_interval,                //The interval used for checking whether or not to begin the bg video
        tempH = 0,
        tempW = 0,
        tempTop = 0,
        tempLeft = 0,
        aspectRat = 192 / 108,
        myAspectRatio = winW / winH,
        startBGMovie,
        myPlayer = _V_("bg-video", { "controls": false, "autoplay": true, "preload": "auto", "loop": true }),
        myPlayer2 = _V_("video2", {"autoplay": true});

    if (myAspectRatio < aspectRat) { //window is too tall
        //Adjust bg video size
        myPlayer.size(Math.floor(winH * aspectRat), winH);
        //Adjust bg video position
        $('#bg-video').css('left', ((winW - Math.floor(winH * aspectRat)) / 2) + 'px');
        $('#bg-video').css('top', '0px');
    } else { //window is too wide
        //Adjust bg video size
        myPlayer.size(winW, Math.floor(winW / aspectRat));
        //Adjust bg video position
        $('#bg-video').css('top', ((winH - Math.floor(winW / aspectRat)) / 2) + 'px');  //adjust top
        $('#bg-video').css('left', '0px');
    }
    //Adjust "curtain" size to be the same as the window
    $('#close-curtain').css('height', winH);
    $('#close-curtain').css('width', winW);
    //Adjust heights of navigation menus
    $(".navmen").css('height', winH - 40 + 'px');

    // window resize
    $(window).bind("resize", function () {
        winW = $(window).width();
        winH = $(window).height();
        myAspectRatio = winW / winH;

        $('#close-curtain').css('height', winH);
        $('#close-curtain').css('width', winW);

        if (myAspectRatio < aspectRat) {  //window is too tall
            //Adjust bg video size
            myPlayer.size(Math.floor(winH * aspectRat), winH);
            //Adjust bg video position
            $('#bg-video').css('left', ((winW - Math.floor(winH * aspectRat)) / 2) + 'px');
            $('#bg-video').css('top', '0px');

            //pop up
            tempW = parseInt((8 / 10) * winW, 10);
            tempH = parseInt((9 / 15.9) * tempW, 10);
            myPlayer2.size(tempW, tempH);
            tempTop = parseInt((winH - tempH) / 2, 10);
            tempLeft = parseInt((winW - tempW) / 2, 10);
            $('#pop-up-video').css('top', tempTop);
            $('#pop-up-video').css('left', tempLeft);
        } else { //window is too wide
            //Adjust bg video size
            myPlayer.size(winW, Math.floor(winW / aspectRat));
            //Adjust bg video position
            $('#bg-video').css('top', ((winH - Math.floor(winW / aspectRat)) / 2) + 'px');
            $('#bg-video').css('left', '0px');

            //pop up
            tempH = parseInt((8 / 10) * winH, 10);
            tempW = parseInt((15.9 / 9) * tempH, 10);
            myPlayer2.size(tempW, tempH);
            tempTop = parseInt((winH - tempH) / 2, 10);
            tempLeft = parseInt((winW - tempW) / 2, 10);
            $('#pop-up-video').css('top', tempTop);
            $('#pop-up-video').css('left', tempLeft);
        }

        tempH = winH - 40 + 'px';
        $(".navmen").css('height', tempH);
    });

    function toHex(n) {
        n = parseInt(n, 10);
        if (isNaN(n)) {
            return "00";
        }
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
    }

    function rgbToHex(R, G, B) { return toHex(R) + toHex(G) + toHex(B); }

    function bufferVideo() {
        myPlayer = _V_("bg-video");
        var bufperc = myPlayer.bufferedPercent();
        $('#loadnum').append('.');

        if (bufperc === 1) {
            clearInterval(buffer_interval);
        }
    }
    buffer_interval = setInterval(function () { bufferVideo(); }, 500);

    //starts open sequence of effects
    startBGMovie = function () {
        myPlayer = this;

        $("#loading").hide();

        // Do something when the event is fired

        $("#wrapcurtain").delay(1000).fadeOut(3000);
        $("div#logo").delay(4000).fadeIn(1000);
        $("#menu").delay(4000).fadeIn(1000);
        $("#whitebar").delay(4000).fadeIn(1000);

    };

    //start playing the pop up video
    function playVideo(filepath) {
        winW = $(window).width();
        winH = $(window).height();
        filepath = 'http://chrisgroban.com/client_review/mp4forsite/' + filepath + '.mp4';
        myPlayer2.width(6 * 150);
        myPlayer2.height(6 * 84);

        $('#curtain2').show();

        myPlayer2.src([
            { type: "video/mp4", src: filepath }
        ]);

        if (myAspectRatio < aspectRat) {
            tempW = parseInt((8 / 10) * winW, 10);
            tempH = parseInt((9 / 15.9) * tempW, 10);
            myPlayer2.size(tempW, tempH);
            tempTop = parseInt((winH - tempH) / 2, 10);
            tempLeft = parseInt((winW - tempW) / 2, 10);
            $('#pop-up-video').css('top', tempTop);
            $('#pop-up-video').css('left', tempLeft);
        } else {
            tempH = parseInt((8 / 10) * winH, 10);
            tempW = parseInt((15.9 / 9) * tempH, 10);
            myPlayer2.size(tempW, tempH);
            tempTop = parseInt((winH - tempH) / 2, 10);
            tempLeft = parseInt((winW - tempW) / 2, 10);
            $('#pop-up-video').css('top', tempTop);
            $('#pop-up-video').css('left', tempLeft);
        }

        _V_("bg-video").pause();        //pause bg video
        $('#pop-up-video').fadeIn(500); //fade in pop-up video wrapper
        myPlayer2.play();               //start pop-up video
    }

    //handle opening  pop up video
    $('a.mytest').click(function () {
        myPlayer.pause();
        playVideo($(this).attr('data-vidurl'));
    });

    //Handle closing the pop up
    $('.close-pop').click(function () {
        canvas.width = document.width;      //Set canvas size
        canvas.height = document.height;

        myPlayer2.pause();                  //Close pop-up video
        $('#curtain2').hide();
        $('#pop-up-video').hide();

        myPlayer.play();                    //Start bg video
    });

    //When the loaded data event fires from videojs, begin the intro animations
    myPlayer.addEvent("loadeddata", startBGMovie);
});