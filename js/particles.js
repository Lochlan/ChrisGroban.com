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

    function particles(){

            playVideo();
            return;


            var partDimX = 150;     //Number of particles wide
            var partDimY = 84;     //Num of particles tall
            var pixDim = 6;         //Size of particles (in pixels)


            var canvas=document.getElementById("canvas");
            var ctx=canvas.getContext("2d");
            var back_canvas=document.getElementById("back_canvas");
            var bctx=back_canvas.getContext("2d");
            var img=document.getElementById("test");
            bctx.drawImage(img,0,0);

            var imgData=bctx.getImageData(0,0,partDimX,partDimY);
            ctx.putImageData(imgData,20,100);


             //Set canvas size
            canvas.width = document.width;
            canvas.height = document.height;

            //Canvas dimensions
            W = canvas.width;
            H = canvas.height;



            var i = 0;
            var particles = new Array(partDimX * partDimY);
            for(var y = 0; y < partDimY; y++) {
                for(var x=0;x<partDimX;x++){  

                    var r = imgData.data[i];
                    var g = imgData.data[i+1];
                    var b = imgData.data[i+2];
                    var pxcolor = rgbToHex(r,g,b);
                    particles[(x*partDimY)+y] = new create_particle(100+(x*pixDim), 100+(y*pixDim), pxcolor);
                    i+=4;
                }

            }

            function create_particle(finX, finY, color) {

                //Final coordinates of each particle
                this.finalX = finX;
                this.finalY = finY;

                //Give each particle a random velocity
                this.vx = (Math.random()*20-10)*3;
                this.vy = (Math.random()*20-10)*3;

                //Position on the canvas
                this.x = finX - (this.vx*50);
                this.y = finY - (this.vy*50);

                //color
                this.color = color;

            }

            ctx.globalAlpha=0;
            var delta = 0.02;

            var i = 0;

            var plen = particles.length;

            function draw() {
                ctx.clearRect(0, 0, W, H);  //clear canvas
                ctx.beginPath();

                var localPixDim = pixDim;

                i=0;
                //Lets draw particles from the array now
                for(var t = 0; t < plen; t++) {
                    var p = particles[t];

                    ctx.fillStyle = p.color;
                    ctx.fillRect(p.x, p.y, localPixDim, localPixDim);
                    //Add velocity
                    if( (p.x != p.finalX) && (p.y != p.finalY) ) {
                        p.x += p.vx;
                        p.y += p.vy;
                    } else {
                        i++;
                    }
                }

                ctx.globalAlpha += delta;
                ctx.fill();

                if(i == plen){  //if the particle effects are done

                    var event;
                    if (document.createEvent) {
                        event = document.createEvent("HTMLEvents");
                        event.initEvent("particlesFinished", true, true);
                    } else {
                        event = document.createEventObject();
                        event.eventType = "particlesFinished";
                    }

                    if (document.createEvent) {
                        document.dispatchEvent(event);
                    } else {
                        document.fireEvent("on" + event.eventType, event);
                    }


                    window.clearInterval(thing);    //stop animation
                    return;
                }
            }


    //####################################
    //actually draw something

            thing = window.setInterval(draw, 10);
            //   */
    //    };


    //});
    }

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

    

    $(window).bind("resize", function(){
        var winW = $(window).width();
        var winH = $(window).height();
        myPlayer.width(winW);
        myPlayer.height(winH);
    });
    
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
    

    $('#pop-frally').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        particles();
    });
    
    
    document.addEventListener("particlesFinished", playVideo, false);
    
    
    
    var echome = function(msg){
        console.log(msg.originalEvent.type);
    }

    
    myPlayer.addEvent("loadeddata", startBGMovie);
    /*
    myPlayer.addEvent("loadstart", echome);
    myPlayer.addEvent("loadedmetadata", echome);
    myPlayer.addEvent("loadeddata", echome);
    myPlayer.addEvent("play", echome);
    myPlayer.addEvent("durationchange", echome);
    myPlayer.addEvent("progress", echome);
    
    
    myPlayer.addEvent("loadedalldata", echome);
    */
    //myPlayer.addEvent("loadstart", console.log("loadstart"));
    //myPlayer.bufferedPercent()
    
    
    var temp;
    function lpmtest()
    {
        var myPlayer = _V_("bg-video");
        var bufperc = myPlayer.bufferedPercent();
        $('#loadnum').append('.');
        
        if( bufperc === 1){
            clearInterval(temp);
        }
    }
    
    
  temp = setInterval(function(){lpmtest()},500);
});



