<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Chris Groban - Film Director - Los Angeles, California</title>

    <link href="./inc/videojs/video-js.css" rel="stylesheet" />
    <script type="text/javascript" src="./inc/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="./inc/videojs/video.js"></script>
    <script type="text/javascript" src="./js/nav.js"></script>
    <script type="text/javascript" src="./js/main.js"></script>
    

    <link rel="stylesheet" href="./css/nav.css" type="text/css" media="screen"/>
    <style type="text/css">
        *{margin:0;padding:0;}
        body{padding:0;margin:0;width:100%;height:100%;min-height:100%;background-color:#000;overflow:hidden;}
        div#wrap{width:100%;height:100%;display:none;
                    position:absolute;top:0px;left:0px;}
        #bg-video{position:absolute;top:0px;left:0px;}
        div#curtain{position:absolute;top:0px;left:0px;width:100%;height:100%;background-color:#000;}
        div#curtain2{position:absolute;top:0px;left:0px;width:100%;height:100%;display:none;z-index:99;}
        #canvas{position:absolute;top:0px;left:0px;}
        
        #main{position:absolute;top:0px;left:0px;padding:0;margin:0;width:100%;height:100%;}
        #logo{position:absolute;bottom:20px;right:50px;width:206px;height:48px;background:url('./img/logo.png');display:none;}
        #menu{display:none;}
        #pop-up-video{display:none;z-index:100;}
        #close-pop{cursor:pointer;text-align:right;color:white;font-weight:bold;}
        /* #video2{margin:5%;} */
        #video2{/*position:absolute;top:100px;left:100px;*/}

    </style>
</head>
<body>

<script type="text/javascript">
</script>
        
        
        
        
        
        
        

        
<img id="test" src="./img/video-screens/frally.png" style="display:none;" />
<canvas id="back_canvas" width="100%" height="100%"></canvas>
        
<div id="curtain" ></div>     
        
<div id="wrap">

    <video id="bg-video" class="video-js vjs-default-skin"
           width="640" height="480"
           data-setup='{ "controls": false, "autoplay": true, "preload": "auto", "loop": true }'>
      <source src="./video/home/projector_bg.mp4" type='video/mp4'>
    </video>

</div>
        
<canvas id="canvas" width="100%" height="100%"></canvas>
        
<div id="main">
    <div id="logo"></div>
    
    
    
    
    
    
    <ul class="menu" id="menu">
        <li id="nav-link-videos">
            <a href="#" style="z-index:90;"><img src="./img/nav/videos.png" /></a>
            <div class="sc_menu_wrapper">
                <div class="sc_menu">
                    <a class="lpmtest"><img src="./img/video_thumbs/Akon.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/AngelTaylor.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/AnotherDay.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/Brown.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/Coffee.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/Frally.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/LudoFOOD.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/LudoWHATIS.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/Reel.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/Trapped.png" alt=""/></a>
                    <a class="lpmtest"><img src="./img/video_thumbs/WalkAway.png" alt=""/></a>
                </div>
            </div>
        </li>
        <li style="width:205px;">
            <a href="#"  style="z-index:90;left:48px;"><img src="./img/nav/bio.png" /></a>
            <div class="sc_menu_wrapper2" style="width:205px;height:289px;">
                <div class="sc_menu" style="width:205px;height:289px;">
                    <a style="display:block;width:205px;height:289px;text-align:left;background:url('http://lochlanmcintosh.com/ChrisGroban.com/img/nav/bio_bg.png') no-repeat top left;">
                        
                        <span style="width:120px;z-index:90;">Chris Groban lives in Los Angeles, CA where he writes and directs music videos, commercials, and documentaries.<br />
                        His hobbies include eating lox on a bagel and telling you to be quiet in movies.</span>
                    
                    </a>
                </div>
            </div>
        </li>
        <li class="last" style="width:173px;">
            <a href="#"  style="z-index:90;left:32px;"><img src="./img/nav/contact.png" /></a>
            <div class="sc_menu_wrapper2" style="width:173px;height:114px;">
                <div class="sc_menu" style="width:173px;height:114px;">
                    <a style="width:173px;height:114px;text-align:left;">Agent: Michael Appel<br />michaelfappel@gmail.com</a>
                </div>
            </div>
        </li>
    </ul>
    
<div id="curtain2" > 


    
    <div id="pop-up-video">
            <a id="close-pop" >Close [X] </a>
    <br/>
        <video id="video2" class="video-js vjs-default-skin"
           controls width="640" height="480" poster="./img/video-screens/frally_big.png"
            data-setup='{ "controls": true, "autoplay": false, "preload": "auto", "loop": false }'>
      <source src="./video/frally.m4v" type='video/mp4'>
    </video>
    </div>


</div>    
    




</div>     
    
    
    

        
        
    <script type="text/javascript">

        //Initializing the canvas
        var canvas = document.getElementById("back_canvas");
        canvas.width = document.width;
        canvas.height = document.height;
        canvas = document.getElementById("canvas");
        canvas.width = document.width;
        canvas.height = document.height;
    </script>

    

</body>
</html>
