<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Chris Groban - Film Director - Los Angeles, California</title>

    <link href="./inc/videojs/video-js.css" rel="stylesheet" />
    <link href="./css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="./css/nav.css" type="text/css" media="screen"/>
    <script type="text/javascript" src="./inc/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="./inc/videojs/video.js"></script>
    <script type="text/javascript" src="./js/nav.js"></script>
    <script type="text/javascript" src="./js/main.js"></script>
</head>
<body>


        
<img id="test" src="./img/video-screens/frally.png" style="display:none;" />
<canvas id="back_canvas" width="100" height="100"></canvas>
        
<div id="curtain" ></div>     
<div id="loading" style="color:#999;position:absolute;top:10px;left:10px;width:50%;height:100%;font-size:11pt;">Buffering video<span id="loadnum"></span></div>        
<div id="wrap">

    <video id="bg-video" class="video-js vjs-default-skin"
           width="640" height="480"
           data-setup='{ "controls": false, "autoplay": true, "preload": "auto", "loop": true }'>
      <source src="./video/home/projector_bg.mp4" type='video/mp4'>
    </video>
</div>
        
<canvas id="canvas" width="100" height="100"></canvas>

<div id="main">
    <div id="logo"></div>

    <ul class="menu" id="menu">
        <li id="nav-link-videos">
            <a href="#" style="z-index:90;"><img src="./img/nav/videos.png" /></a>
            <div class="sc_menu_wrapper">
                <div class="sc_menu">
                    <a class=""><img src="./img/video_thumbs/Akon.png" alt=""/></a>
                    <a class=""><img src="./img/video_thumbs/AngelTaylor.png" alt=""/></a>
                    <a class=""><img src="./img/video_thumbs/AnotherDay.png" alt=""/></a>
                    <a class=""><img src="./img/video_thumbs/Brown.png" alt=""/></a>
                    <a class=""><img src="./img/video_thumbs/Coffee.png" alt=""/></a>
                    <a id="pop-frally" class=""><img src="./img/video_thumbs/Frally.png" alt=""/></a>
                    <a class=""><img src="./img/video_thumbs/LudoFOOD.png" alt=""/></a>
                    <a class=""><img src="./img/video_thumbs/LudoWHATIS.png" alt=""/></a>
                    <a class=""><img src="./img/video_thumbs/Reel.png" alt=""/></a>
                    <a class=""><img src="./img/video_thumbs/Trapped.png" alt=""/></a>
                    <a class=""><img src="./img/video_thumbs/WalkAway.png" alt=""/></a>
                </div>
            </div>
        </li>
        
        <li style="width:205px;">
            <a href="#"  style="z-index:90;left:48px;"><img src="./img/nav/bio.png" /></a>
            <div class="sc_menu_wrapper2" style="width:205px;">
                <div class="sc_menu" style="width:205px;/*height:289px;*/height:288px;">
                    <a style="display:block;width:205px;height:288px;text-align:left;background:url('http://lochlanmcintosh.com/ChrisGroban.com/img/nav/bio_bg.png') no-repeat top left;">
                        
                        <span style="position:absolute;top:15px;left:20px;width:140px;z-index:90;font-size:11pt;">Chris Groban lives in Los Angeles, CA where he writes and directs music videos, commercials, and documentaries.<br /><br />
                        His hobbies include eating lox on a bagel and telling you to be quiet in movies.</span>
                    
                    </a>
                </div>
            </div>
        </li>
        
        <li class="last" style="width:173px;">
            <a href="#"  style="z-index:90;left:32px;"><img src="./img/nav/contact.png" /></a>
            <div class="sc_menu_wrapper2" style="width:173px;">
                <div class="sc_menu" style="width:173px;height:114px;">
                    <a style="width:173px;height:114px;text-align:left;">Agent: Michael Appel<br />michaelfappel@gmail.com</a>
                </div>
            </div>
        </li>
    </ul>
    
    <div id="curtain2" >

        <div id="pop-up-video">
                <a id="close-pop" >X close</a>
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
