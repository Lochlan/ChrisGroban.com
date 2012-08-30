$(document).ready(function(){

    //globals
    var paused = false;
    var thing;
    var winW = $(window).width();
    var winH = $(window).height();
    var newW = winW;
    var newH = winH;
    var aspectRat = 192/108;
    var myAspectRatio = winW / winH;
    
    var myPlayer2 = _V_("video2");
    
    var v2aspectRat = 4/3;

    if(myAspectRatio < aspectRat){
        newW = Math.floor(winH * aspectRat);

    } else{
        newH = Math.floor(winW / aspectRat);

    }
    
    var myPlayer = _V_("bg-video", { "controls": false, "autoplay": true, "preload": "auto", "loop": true });
    //myPlayer.size(winW,winH);
    myPlayer.size(newW,newH);

    var tempH = winH-40+'px';
    $(".navmen").css('height', tempH);
    

          // window resize
    $(window).bind("resize", function(){
        /*
        var winW = $(window).width();
        var winH = $(window).height();
        myPlayer.width(winW);
        myPlayer.height(winH);
        */


            var winW = $(window).width();
        var winH = $(window).height();
        var newW = winW;
        var newH = winH;
        var aspectRat = 192/108;
        var myAspectRatio = winW / winH;

        if(myAspectRatio < aspectRat){
            newW = Math.floor(winH * aspectRat);
            var tempW = parseInt( (8/10)*winW ); var tempH = parseInt( (9/15.9)*tempW );
            myPlayer2.size(tempW, tempH);
            var tempTop = parseInt( (winH-tempH)/2 ); var tempLeft = parseInt( (winW-tempW)/2 );
            $('#pop-up-video').css('top',tempTop); $('#pop-up-video').css('left',tempLeft);
        } else{
            newH = Math.floor(winW / aspectRat);
            var tempH = parseInt( (8/10)*winH );var tempW = parseInt( (15.9/9)*tempH );
            myPlayer2.size(tempW, tempH);
            var tempTop = parseInt( (winH-tempH)/2 );var tempLeft = parseInt( (winW-tempW)/2 );
            $('#pop-up-video').css('top',tempTop);$('#pop-up-video').css('left',tempLeft);
        }
        
        var tempH = winH-40+'px';
        $(".navmen").css('height', tempH);
    

        myPlayer.size(newW,newH);
    });  



    function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}

    function toHex(n) {
        n = parseInt(n,10);
        if (isNaN(n)) return "00";
        n = Math.max(0,Math.min(n,255));
        return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
    }


    var temp;
    function bufferVideo()
    {
        var myPlayer = _V_("bg-video");
        var bufperc = myPlayer.bufferedPercent();
        $('#loadnum').append('.');
        
        if( bufperc === 1){
            clearInterval(temp);
        }
    }
    temp = setInterval(function(){bufferVideo()},500);


    //starts open sequence of effects
    var startBGMovie = function(){
        var myPlayer = this;
        var howMuchIsDownloaded = myPlayer.bufferedPercent();
        var bufferedTimeRange = myPlayer.buffered();
        
        $("#loading").hide();
        
        // Do something when the event is fired
        
        $("#wrapcurtain").delay(1000).fadeOut(3000);
        $("div#logo").delay(4000).fadeIn(1000);
        $("#menu").delay(4000).fadeIn(1000);
        $("#whitebar").delay(4000).fadeIn(1000);
        
    };
    


    //handle opening  pop up video
    $('#pop-akon').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/1076_AEPK_101202_1000-ForSite.mp4");
    });

    //handle opening  pop up video
    $('#pop-frally').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/Frally_CASUALTY_101212_1000_FIN-ForSite.mp4");
    });

    
    $('#pop-ludofood').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/Ludo_FOOD_110125_1400-QuickTime%20H.264.mp4");
    });
    
    $('#pop-ludowhat').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/Ludo_WhatIsLudobites_110127_1500-QuickTime%20H.264.mp4");
    });
    
    $('#pop-reel').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/REEL_Director_120119_1600_v2_720x405-ForSite.mp4");
    });

    
    $('#pop-trapped').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/TRAPPED_110505_1200-ForSite.mp4");
    });
    
    $('#pop-walkaway').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        playVideo("http://chrisgroban.com/client_review/mp4forsite/WalkAway_111203_1200-ForSite.mp4");
    });
    

    //start playing the pop up video
    function playVideo(mp4path){
        if(!paused){
            //var myPlayer2 = _V_("video2", {"autoplay":true, "poster": posterpath});
            var myPlayer2 = _V_("video2", {"autoplay":true});
            var winW = $(window).width();
            var winH = $(window).height();
            myPlayer2.width(6 * 150);
            myPlayer2.height(6* 84);

            $('#curtain2').show();

            myPlayer2.src([
                { type: "video/mp4", src: mp4path }
            ]);
            
            
            
            
            if(myAspectRatio < aspectRat){
                var tempW = parseInt( (8/10)*winW ); var tempH = parseInt( (9/15.9)*tempW );
                myPlayer2.size(tempW, tempH);
                var tempTop = parseInt( (winH-tempH)/2 ); var tempLeft = parseInt( (winW-tempW)/2 );
                $('#pop-up-video').css('top',tempTop); $('#pop-up-video').css('left',tempLeft);
            } else{
                var tempH = parseInt( (8/10)*winH );var tempW = parseInt( (15.9/9)*tempH );
                myPlayer2.size(tempW, tempH);
                var tempTop = parseInt( (winH-tempH)/2 );var tempLeft = parseInt( (winW-tempW)/2 );
                $('#pop-up-video').css('top',tempTop);$('#pop-up-video').css('left',tempLeft);
            }

            
            
            

            $('#pop-up-video').fadeIn(500);
            
            paused = true;
            
            _V_("bg-video").pause();
            
            myPlayer2.play();

        }
    }

    //Handle closing the pop up
    $('#close-pop').click(function() {
        var canvas=document.getElementById("canvas");
         //Set canvas size
        canvas.width = document.width;
        canvas.height = document.height;

        //Canvas dimensions
        W = canvas.width;
        H = canvas.height;

        var ctx=canvas.getContext("2d");
        ctx.clearRect(0, 0, W, H);  //clear canvas
        var myPlayer2 = _V_("video2");
        myPlayer2.pause();
        $('#curtain2').hide();
        $('#pop-up-video').hide();
        paused = false;
        myPlayer.play();
    });
    
    
    var echome = function(msg){
        console.log(msg.originalEvent.type);
    }

    
    myPlayer.addEvent("loadeddata", startBGMovie);

});



