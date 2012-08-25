


    function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
    function toHex(n) {
        n = parseInt(n,10);
        if (isNaN(n)) return "00";
        n = Math.max(0,Math.min(n,255));
        return "0123456789ABCDEF".charAt((n-n%16)/16)
             + "0123456789ABCDEF".charAt(n%16);
    }


var thing;


    //document.getElementById("test").onload=function(){
//$("#test").load(function(){
function goTeam(){    
            var partDimX = 150;     //Number of particles wide
        var partDimY = 100;     //Num of particles tall
        var pixDim = 5;         //Size of particles (in pixels)
        
        
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

            i=0;
            //Lets draw particles from the array now
            for(var t = 0; t < plen; t++) {
                var p = particles[t];

                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, pixDim, pixDim);
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
            
            if(i == plen){
                console.log('heyyyo');
                window.clearInterval(thing);
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


$('#test').load(function() {
  goTeam();
});
