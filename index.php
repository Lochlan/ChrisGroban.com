<?php

// These lines are mandatory.

include './inc/Mobile_Detect.php';
$detect = new Mobile_Detect;

if ($detect->isMobile()) {
    // Your code here.
    header( 'Location: http://www.chrisgroban.com/mobile/' ) ;
}

?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Chris Groban - Film Director - Los Angeles, California</title>
    <link href="./inc/videojs/video-js.css" rel="stylesheet" />
    <link href="./css/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="./css/nav.css" type="text/css" media="screen"/>
    <script type="text/javascript" src="./inc/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="./inc/videojs/video.js"></script>
    <script async type="text/javascript" src="./js/nav.js"></script>
    <script async type="text/javascript" src="./js/main.js"></script>
</head>
<body>
 
<img id="test" src="./img/video-screens/frally.png" style="display:none;" />
<canvas id="back_canvas" width="100" height="100"></canvas>
        
<div id="curtain" ></div>     

<div id="wrap">

    <video id="bg-video" class="video-js vjs-default-skin"
           width="640" height="480"
           data-setup='{ "controls": false, "autoplay": true, "preload": "auto", "loop": true }'>
        <source src="http://chrisgroban.com/client_review/mp4forsite/projector_ACTUAL_v3_noaudio_120830_H.mp4" type='video/mp4'>
    </video>
    
    <div id="wrapcurtain" ><div id="loading" style="color:#999;position:absolute;top:10px;left:10px;width:50%;height:100%;font-size:11pt;">Buffering video<span id="loadnum"></span></div>        </div>
</div>
        
<canvas id="canvas" width="100" height="100"></canvas>

<div id="main">
    <div id="logo"></div>
    <img src="./img/white-bar.png" id="whitebar" style="display:none;position:absolute;bottom:38px;left:0px;" />
    <ul class="menu" id="menu">
        
        <img src="./img/nav/videos_u2.png" style="position:absolute;bottom:23px;left:20px;opacity:0.2;" id="mirror1" />
        <img src="./img/nav/bio_u2.png" style="position:absolute;bottom:23px;left:216px;opacity:0.2;" id="mirror2" />
        <img src="./img/nav/contact_u2.png" style="position:absolute;bottom:23px;left:411px;opacity:0.2;" id="mirror3" />
        
        <li id="li1" class="navmen vids">
            <a href="#" style="z-index:90;" id="navlink1"><img src="./img/nav/videos.png"  /></a>
            <div class="sc_menu_wrapper">
                <div class="sc_menu vid_nav">
                    
                    <a id="pop-akon" class="mytest" data-vidurl="1076_AEPK_101202_1000-ForSite"><span class="mytest"><p>Akon</p><p class="ptitle">EPK</p><img src="./img/video_thumbs/Akon.png" alt="" class="pointer" /></span></a>
                    <a id="pop-angel" class="mytest" data-vidurl="Angel%20Taylor%20EPK%202010"><span class="mytest"><p>Angel Taylor</p><p class="ptitle">EPK</p><img src="./img/video_thumbs/AngelTaylor.png" alt="" class="pointer" /></span></a>
                    <a id="pop-brown" class="mytest" data-vidurl="BROWN"><span class="mytest"><p>Brown</p><p class="ptitle">Short Film</p><img src="./img/video_thumbs/Brown.png" alt="" class="pointer" /></span></a>
                    <a id="pop-frally" class="mytest" data-vidurl="Frally_CASUALTY_101212_1000_FIN-ForSite"><span class="mytest"><p>Frally "Casualty"</p><p class="ptitle">Music Video</p><img src="./img/video_thumbs/Frally.png" alt="" class="pointer" /></span></a>
                    <a id="pop-trapped" class="mytest" data-vidurl="TRAPPED_110505_1200-ForSite"><span class="mytest"><p>Molly Bryant "Trapped"</p><p class="ptitle">Music Video</p><img src="./img/video_thumbs/Trapped.png" alt="" class="pointer" /></span></a>
                    <a id="pop-coffee" class="mytest" data-vidurl="COFFEE"><span class="mytest"><p>Coffee</p><p class="ptitle">Short Film</p><img src="./img/video_thumbs/Coffee.png" alt="" class="pointer" /></span></a>
                    <a id="pop-anotherday" class="mytest" data-vidurl="Excerpt%20from%20Another%20Day"><span class="mytest"><p>Another Day</p><p class="ptitle">Excerpt from Film</p><img src="./img/video_thumbs/AnotherDay.png" alt="" class="pointer" /></span></a>
                    <a id="pop-walkaway" class="mytest" data-vidurl="WalkAway_111203_1200-ForSite"><span class="mytest"><p>Josh Groban<br />"If I Walk Away"</p><p class="ptitle">Music Video</p><img src="./img/video_thumbs/WalkAway.png" alt="" class="pointer" /></span></a>
                    <a id="pop-ludofood" class="mytest" data-vidurl="Ludo_FOOD_110125_1400-QuickTime%20H.264"><span class="mytest"><p>Ludobites:<br/>The Food</p><p class="ptitle">Short Doc</p><img src="./img/video_thumbs/LudoFOOD.png" alt="" class="pointer" /></span></a>
                    <a id="pop-ludowhat" class="mytest" data-vidurl="Ludo_WhatIsLudobites_110127_1500-QuickTime%20H.264"><span class="mytest"><p>What is Ludobites?</p><p class="ptitle">Short Doc</p><img src="./img/video_thumbs/LudoWHATIS.png" alt="" class="pointer" /></span></a>
                    <a id="pop-reel" class="mytest" data-vidurl="REEL_Director_120119_1600_v2_720x405-ForSite"><span class="mytest"><p>Chris Groban</p><p class="ptitle">Reel</p><img src="./img/video_thumbs/Reel.png" alt="" class="pointer" /></span></a>
                </div>
            </div>
        </li>
        
        <li id="li2" style="width:219px;" class="navmen">
            <a href="#"  style="z-index:90;left:48px;" id="navlink2"><img src="./img/nav/bio.png" /></a>
            <div class="sc_menu_wrapper2" style="width:219px;">
                <div class="sc_menu" style="width:219px;/*height:289px;*/height:288px;">
                    <a  class="mytest2" style="display:block;width:219px;height:288px;text-align:left;background:url('./img/nav/bio_background.png') no-repeat top left;">
                        
                        <span  class="mytest2" style="position:absolute;top:15px;left:20px;width:140px;z-index:90;font-size:11pt;">Chris Groban lives in Los Angeles, CA where he writes and directs music videos, commercials, and documentaries.<br /><br />
                        His hobbies include eating lox on a bagel and telling you to be quiet in movies.</span>
                    
                    </a>
                </div>
            </div>
        </li>
        
        <li id="li3" class="last navmen" style="width:210px;">
            <a href="#"  style="z-index:90;left:50px;" id="navlink3"><img src="./img/nav/contact.png" /></a>
            <div class="sc_menu_wrapper2" style="width:210px;">
                <div class="sc_menu" style="width:210px;height:114px;">
                    <a  class="mytest3" style="width:210px;height:114px;text-align:left;background:url('./img/curtain-bg.png') repeat top left;">
                        <span  class="mytest3" style="position:absolute;top:15px;left:20px;width:170px;z-index:90;font-size:11pt;">Executive Producer: Michael Appel<br />michaelfappel@gmail.com</span></a>
                </div>
            </div>
        </li>
    </ul>
    
    <div id="curtain2" >
        <div id="close-curtain" class="close-pop"> </div>
        <div id="pop-up-video">
                <a id="close-pop" class="close-pop">X close</a>
        <br/>
            <video id="video2" class="video-js vjs-default-skin"
                controls width="640" height="480"
                data-setup='{ "controls": true, "autoplay": false, "loop": false }'>
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
