$(document).ready(function () {
    "use strict";
    //globals
    var paused = false,
        thing,
        canvas = document.getElementById("canvas"),
        W = canvas.width,
        H = canvas.height,
        winW = $(window).width(),
        winH = $(window).height(),
        newW = winW,
        newH = winH,
        newL = 0,
        newT = 0,
        temp,
        tempH = 0,
        tempW = 0,
        tempTop = 0,
        tempLeft = 0,
        aspectRat = 192 / 108,
        myAspectRatio = winW / winH,
        v2aspectRat = 4 / 3,
        howMuchIsDownloaded,
        bufferedTimeRange,
        startBGMovie,
        myPlayer = _V_("bg-video", { "controls": false, "autoplay": true, "preload": "auto", "loop": true }),
        myPlayer2 = _V_("video2", {"autoplay": true});

    if (myAspectRatio < aspectRat) {  //window is too tall        
        newW = Math.floor(winH * aspectRat);
        myPlayer.size(newW, newH);
        newL = ((winW - newW) / 2) + 'px';

        $('#bg-video').css('left', newL);
        $('#bg-video').css('top', '0px');
    } else { //window is too wide
        newH = Math.floor(winW / aspectRat);
        myPlayer.size(newW, newH);
        newT = ((winH - newH) / 2) + 'px';
        $('#bg-video').css('top', newT);
        $('#bg-video').css('left', '0px');
    }
    $('#close-curtain').css('height', winH);
    $('#close-curtain').css('width', winW);
    tempH = winH - 40 + 'px';
    $(".navmen").css('height', tempH);

    // window resize
    $(window).bind("resize", function () {
        winW = $(window).width();
        winH = $(window).height();
        newW = winW;
        newH = winH;
        aspectRat = 192 / 108;
        myAspectRatio = winW / winH;

        $('#close-curtain').css('height', winH);
        $('#close-curtain').css('width', winW);

        if (myAspectRatio < aspectRat) {  //too tall
            //bg
            newW = Math.floor(winH * aspectRat);

            myPlayer.size(newW, newH);

            newL = ((winW - newW) / 2) + 'px';
            $('#bg-video').css('left', newL);
            $('#bg-video').css('top', '0px');
            //console.log('setting left to '+newL);

            //pop up
            tempW = parseInt((8 / 10) * winW, 10);
            tempH = parseInt((9 / 15.9) * tempW, 10);
            myPlayer2.size(tempW, tempH);
            tempTop = parseInt((winH - tempH) / 2, 10);
            tempLeft = parseInt((winW - tempW) / 2, 10);
            $('#pop-up-video').css('top', tempTop);
            $('#pop-up-video').css('left', tempLeft);
        } else { //too wide
            //bg
            newH = Math.floor(winW / aspectRat);

            myPlayer.size(newW, newH);

            //set top
            newT = ((winH - newH) / 2) + 'px';
            $('#bg-video').css('top', newT);
            $('#bg-video').css('left', '0px');
            //console.log('setting top to '+newT);

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
            clearInterval(temp);
        }
    }
    temp = setInterval(function () { bufferVideo(); }, 500);

    //starts open sequence of effects
        startBGMovie = function () {
        myPlayer = this;
        howMuchIsDownloaded = myPlayer.bufferedPercent();
        bufferedTimeRange = myPlayer.buffered();

        $("#loading").hide();

        // Do something when the event is fired

        $("#wrapcurtain").delay(1000).fadeOut(3000);
        $("div#logo").delay(4000).fadeIn(1000);
        $("#menu").delay(4000).fadeIn(1000);
        $("#whitebar").delay(4000).fadeIn(1000);

    };

    //start playing the pop up video
    function playVideo(filepath) {
        if (!paused) {

            winW = $(window).width();
            winH = $(window).height();
            filepath = filepath + '.mp4';
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

            $('#pop-up-video').fadeIn(500);

            paused = true;

            _V_("bg-video").pause();

            myPlayer2.play();

        }
    }

    //handle opening  pop up video
    $('#pop-akon').click(function () {
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/1076_AEPK_101202_1000-ForSite");
    });

    $('#pop-angel').click(function () {
        myPlayer.pause();
        playVideo("http://www.chrisgroban.com/client_review/mp4forsite/Angel%20Taylor%20EPK%202010");
    });

    $('#pop-anotherday').click(function () {
        myPlayer.pause();
        playVideo("http://www.chrisgroban.com/client_review/mp4forsite/Excerpt%20from%20Another%20Day");
    });

    $('#pop-brown').click(function () {
        myPlayer.pause();
        playVideo("http://www.chrisgroban.com/client_review/mp4forsite/BROWN");
    });

    $('#pop-coffee').click(function () {
        myPlayer.pause();
        playVideo("http://www.chrisgroban.com/client_review/mp4forsite/COFFEE");
    });

    $('#pop-frally').click(function () {
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/Frally_CASUALTY_101212_1000_FIN-ForSite");
    });


    $('#pop-ludofood').click(function () {
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/Ludo_FOOD_110125_1400-QuickTime%20H.264");
    });

    $('#pop-ludowhat').click(function () {
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/Ludo_WhatIsLudobites_110127_1500-QuickTime%20H.264");
    });

    $('#pop-reel').click(function () {
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/REEL_Director_120119_1600_v2_720x405-ForSite");
    });

    $('#pop-trapped').click(function () {
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/TRAPPED_110505_1200-ForSite");
    });

    $('#pop-walkaway').click(function () {
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/WalkAway_111203_1200-ForSite");
    });


    //Handle closing the pop up
    $('#close-pop').click(function () {

        //Set canvas size
        canvas.width = document.width;
        canvas.height = document.height;

        //Canvas dimensions
        W = canvas.width;
        H = canvas.height;

        //var ctx=canvas.getContext("2d");
        //ctx.clearRect(0, 0, W, H);  //clear canvas
        myPlayer2.pause();
        $('#curtain2').hide();
        $('#pop-up-video').hide();
        paused = false;
        myPlayer.play();
    });
    $('#close-curtain').click(function () {
         //Set canvas size
        canvas.width = document.width;
        canvas.height = document.height;

        //Canvas dimensions
        W = canvas.width;
        H = canvas.height;

        //var ctx=canvas.getContext("2d");
        //ctx.clearRect(0, 0, W, H);  //clear canvas
        myPlayer2.pause();
        $('#curtain2').hide();
        $('#pop-up-video').hide();
        paused = false;
        myPlayer.play();
    });

    myPlayer.addEvent("loadeddata", startBGMovie);

});
