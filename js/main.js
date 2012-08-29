$(document).ready(function(){

    //globals
    var paused = false;
    var thing;
    var winW = $(window).width();
    var winH = $(window).height();
    var newW = winW;
    var newH = winH * 2;
    var aspectRat = 1920/1080;
    var myAspectRatio = winW / winH;

    if(myAspectRatio < aspectRat){
        newW = Math.floor(winH * aspectRat);
    } else{
        newH = Math.floor(winW / aspectRat); 
    }
    
    var myPlayer = _V_("bg-video", { "controls": false, "autoplay": true, "preload": "auto", "loop": true });
    myPlayer.size(winW,winH);


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
        $("div#wrap").delay(300).fadeIn(3000);
        $("div#logo").delay(4000).fadeIn(1000);
        $("#menu").delay(4000).fadeIn(1000);
    };
    
      // window resize
    $(window).bind("resize", function(){
        var winW = $(window).width();
        var winH = $(window).height();
        myPlayer.width(winW);
        myPlayer.height(winH);
    });  

    //handle opening  pop up video
    $('#pop-frally').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        playVideo();
    });

    //start playing the pop up video
    function playVideo(){
        if(!paused){
            var myPlayer2 = _V_("video2", {"autoplay":false, "poster": "./img/video-screens/frally_big.png"});
            var winW = $(window).width();
            var winH = $(window).height();
            myPlayer2.width(6 * 150);
            myPlayer2.height(6* 84);

            $('#curtain2').show();

            myPlayer2.src([
                { type: "video/mp4", src: "./video/frally.m4v" }
            ]);

            $('#pop-up-video').fadeIn(500);
            
            paused = true;
            
            _V_("bg-video").pause();

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



