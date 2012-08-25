
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


function wait(msecs) {
    var start = new Date().getTime();
    var cur = start
    while(cur - start < msecs) {
        cur = new Date().getTime();
    }	
} 









    //globals
    var paused = false;   
    var myvar1 = 0;
    var thing;
    
    var frameArr = new Array();
    var testTemp;
    var frameN = 0;


function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}

function toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)) return "00";
    n = Math.max(0,Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
}

//particle animation function
function goTeam(){
    
    
    playVideo();
    return;
    
    
    
    
    
    
    
    
        var requestId = 0;
    
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

        //create particles
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
        
        ctx.globalAlpha=0;
        var delta = 0.09;
        i = 0;
        var plen = particles.length;

        function create_particle(finX, finY, color) {
            //Final coordinates of each particle
            this.finalX = finX;
            this.finalY = finY;

            //Give each particle a random velocity
            this.vx = (Math.random()*20-10)*3;
            this.vy = (Math.random()*20-10)*3;

            //Position on the canvas
            this.x = finX - (this.vx*10);
            this.y = finY - (this.vy*10);

            //color
            this.color = color;
        }

        //main drawing function loop
        function draw() {
            
            requestId = requestAnimationFrame(draw);

            
            ctx.clearRect(0, 0, W, H);  //clear canvas
            
            
            
            ctx.beginPath();
            
            var localPixDim = pixDim;   //redeclare pixDim as a local variable -- supposedly changing the variable scoping has some performance benefits

            i=0;
            //Loop through particles
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
            //ctx.fill();
            
            
            testTemp = ctx.getImageData(0,0,W,H);
            frameArr[frameN] = testTemp;
            frameN++;
            
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
                
                //done
                //window.clearInterval(thing);    //stop animation
                
                if (requestId)
                    cancelAnimationFrame(requestId);
                requestId = 0;
                
                return;
            }
        }

        //actually draw something
        //thing = window.setInterval(draw, 15);
        //draw();
        requestId = requestAnimationFrame(draw);

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

        $('#pop-up-video').fadeIn(800);

        paused = true;
        
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
    }
}



//what does this function do?
function lpmTest(){
    
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    
    //Set canvas size
    canvas.width = document.width;
    canvas.height = document.height;

    //Canvas dimensions
    W = canvas.width;
    H = canvas.height;
    
    ctx.clearRect(0, 0, W, H);  //clear canvas
    ctx.beginPath();
            
        //ctx.fill();

    
    console.log(frameArr);
    console.log(testTemp);
    
    var temp = frameArr.length;
    console.log(frameArr.length);
    for(var n=0;n<temp;n++){
        

        //ctx.clearRect(0, 0, W, H);
        //wait(500);
        ctx.clearRect(0, 0, W, H);  //clear canvas
        ctx.putImageData(frameArr[n],0,0);
        ctx.fill();
        wait(500);
        console.log('iteration'+n);
    }
}

//add event listener to fire callback when the particle animation is complete
//document.addEventListener("particlesFinished", playVideo, false);
document.addEventListener("particlesFinished", lpmTest, false); 



//"main loop"
$(document).ready(function(){
    paused = false;
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
   
    //console.log("win: " + winW + " " + winH);   console.log("new: " + newW + " " + newH);   console.log(aspectRat); console.log(myAspectRatio);
    
    //myPlayer.size(newW,newH);
    var myPlayer = _V_("bg-video", { "controls": false, "autoplay": false, "preload": "auto", "loop": true });
    myPlayer.size(winW,winH);


    //handler for when window is resized
    $(window).bind("resize", function(){
        var $winW = $(window).width();
        var $winH = $(window).height();
        myPlayer.width($winW);
        myPlayer.height($winH);
    });
    
    
    //into animation
    var startBGMovie = function(){
        var myPlayer = this;
        // Do something when the event is fired
        $("div#wrap").fadeIn(3000);
        $("div#logo").delay(4000).fadeIn(1000);
        $("#menu").delay(4000).fadeIn(1000);
    };
    
    //Play background video
    myPlayer.addEvent("play", startBGMovie);
    startBGMovie();



    //function for closing the video pop-up
    $('#close-pop').click(function() {
        var canvas=document.getElementById("canvas");
        var ctx=canvas.getContext("2d");
        var W = canvas.width;
        var H = canvas.height;
        ctx.clearRect(0, 0, W, H);  //clear canvas
            var myPlayer2 = _V_("video2");
            myPlayer2.pause();
            $('#curtain2').hide();
            $('#pop-up-video').hide();
            paused = false;
            myPlayer.play();
    });


    //Handler for video-pop up.
    $('.lpmtest').click(function() {
        var myPlayer = _V_("bg-video");
        myPlayer.pause();
        goTeam();
    });
    
    
    
});