<?php
    include './inc/Mobile_Detect.php';
    $detect = new Mobile_Detect;

    if ($detect->isMobile()) {
        header('Location: http://www.chrisgroban.com/mobile/');
    }
?><!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"> 
    <title>Chris Groban - Film Director - Los Angeles, California</title>
    <link href="./inc/videojs/video-js.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/nav.css" type="text/css" media="screen">
    <link href="./css/style.css" rel="stylesheet">
    <script type="text/javascript" src="./inc/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="./inc/videojs/video.js"></script>
    <script async type="text/javascript" src="./js/nav.js"></script>
    <script async type="text/javascript" src="./js/main.js"></script>
</head>
<body>

<canvas id="back_canvas" width="100" height="100"></canvas>

<div id="wrap">
    <video
        id="js-background_video" class="background_video video-js vjs-default-skin"
        width="640" height="480"
        data-setup='{ "controls": false, "autoplay": true, "preload": "auto", "loop": true }'
    >
        <source
            src="http://chrisgroban.com/client_review/mp4forsite/projector_ACTUAL_v3_noaudio_120830_H.mp4"
            type='video/mp4'
        >
    </video>

    <div id="curtain" class="js-curtain">
        <div id="loading" class="js-loading">Buffering video</div>
    </div>
</div>

<canvas id="canvas" width="100" height="100"></canvas>

<div id="main">
    <div id="logo" class="js-logo"></div>
    <img src="./img/white-bar.png" id="whitebar" class="js-whitebar">
    <ul id="menu" class="js-menu menu">

        <img src="./img/nav/videos_u2.png" id="mirror1" class="js-mirror_1">
        <img src="./img/nav/bio_u2.png" id="mirror2" class="js-mirror_2">
        <img src="./img/nav/contact_u2.png" id="mirror3" class="js-mirror_3">

        <li id="li1" class="js-nav_menu_container">
            <a href="#" id="navlink1" class="js-navlink1 js-nav_link" data-nav-link="1"><img src="./img/nav/videos.png"></a>
            <div class="sc_menu_wrapper">
                <div class="sc_menu video_nav_menu js-nav_menu_1">

                    <a class="js-play_video" data-video-filename="1076_AEPK_101202_1000-ForSite">
                        <div>
                            <p>Akon</p>
                            <p class="video_category">EPK</p>
                            <img src="./img/video_thumbs/Akon.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="Angel%20Taylor%20EPK%202010">
                        <div>
                            <p>Angel Taylor</p>
                            <p class="video_category">EPK</p>
                            <img src="./img/video_thumbs/AngelTaylor.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="BROWN">
                        <div>
                            <p>Brown</p>
                            <p class="video_category">Short Film</p>
                            <img src="./img/video_thumbs/Brown.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="Frally_CASUALTY_101212_1000_FIN-ForSite">
                        <div>
                            <p>Frally "Casualty"</p>
                            <p class="video_category">Music Video</p>
                            <img src="./img/video_thumbs/Frally.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="TRAPPED_110505_1200-ForSite">
                        <div>
                            <p>Molly Bryant "Trapped"</p>
                            <p class="video_category">Music Video</p>
                            <img src="./img/video_thumbs/Trapped.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="COFFEE">
                        <div>
                            <p>Coffee</p>
                            <p class="video_category">Short Film</p>
                            <img src="./img/video_thumbs/Coffee.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="Excerpt%20from%20Another%20Day">
                        <div>
                            <p>Another Day</p>
                            <p class="video_category">Excerpt from Film</p>
                            <img src="./img/video_thumbs/AnotherDay.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="WalkAway_111203_1200-ForSite">
                        <div>
                            <p>Josh Groban<br>"If I Walk Away"</p>
                            <p class="video_category">Music Video</p>
                            <img src="./img/video_thumbs/WalkAway.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="Ludo_FOOD_110125_1400-QuickTime%20H.264">
                        <div>
                            <p>Ludobites:<br>The Food</p>
                            <p class="video_category">Short Doc</p>
                            <img src="./img/video_thumbs/LudoFOOD.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="Ludo_WhatIsLudobites_110127_1500-QuickTime%20H.264">
                        <div>
                            <p>What is Ludobites?</p>
                            <p class="video_category">Short Doc</p>
                            <img src="./img/video_thumbs/LudoWHATIS.png">
                        </div>
                    </a>
                    <a class="js-play_video" data-video-filename="REEL_Director_120119_1600_v2_720x405-ForSite">
                        <div>
                            <p>Chris Groban</p>
                            <p class="video_category">Reel</p>
                            <img src="./img/video_thumbs/Reel.png">
                        </div>
                    </a>

                </div>
            </div>
        </li>

        <li id="li2" class="js-nav_menu_container">
            <a href="#" id="navlink2" class="js-navlink2"><img src="./img/nav/bio.png"></a>
            <div class="sc_menu_wrapper2 bio_nav_menu_wrapper">
                <div class="sc_menu bio_nav_menu js-nav_menu_2">
                    <a>
                        <div>
                            <p>Chris Groban lives in Los Angeles, CA where he writes and directs music videos, commercials, and documentaries.</p>
                            <br>
                            <p>His hobbies include eating lox on a bagel and telling you to be quiet in movies.</p>
                        </div>
                    </a>
                </div>
            </div>
        </li>

        <li id="li3" class="js-nav_menu_container">
            <a href="#" id="navlink3" class="js-navlink3"><img src="./img/nav/contact.png"></a>
            <div class="sc_menu_wrapper2 contact_nav_menu_wrapper">
                <div class="sc_menu contact_nav_menu js-nav_menu_3">
                    <a>
                        <div>
                            <p>Executive Producer:</p>
                            <p>Michael Appel</p>
                            <p>michaelfappel@gmail.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </li>
    </ul>

    <div id="modal_layer" class="js-modal_layer">
        <div id="modal_close_layer" class="js-close_pop_up"></div>
        <div id="modal_container" class="js-modal_container">
            <a id="close_pop_up" class="js-close_pop_up">X close</a>
            <br>
            <video
                id="js-modal_video" class="video-js vjs-default-skin"
                controls width="640" height="480"
                data-setup='{ "controls": true, "autoplay": false, "loop": false }'
            ></video>
        </div>
    </div>

</div>

</body>
</html>
