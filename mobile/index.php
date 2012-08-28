<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
        <!-- link rel="stylesheet" href="./bootstrap/css/bootstrap.css" / -->
	<link href="./css/style.css" rel="stylesheet" />
        <script type="text/javascript" src="./jquery-1.8.0.min.js"></script>
</head>
<body>

<div id="wrap">

    <div id="header">
        <img src="./img/header/logo.png" id="logo" />
    </div>

    <div id="navigation">
        <ul>
            <li><a id="videos">Videos</a></li>
            <li><a id="bio">Bio</a></li>
            <li class="last"><a id="contact">Contact</a></li>
        </ul>
    </div>

    <div class="content" id="c-videos">
        <ul>
            <li><a href="./#/1" id="v1">Chris Groban<br/><span class="grey">Reel</span></a></li>
            
            <li><a href="./#/2" id="v2">Chris Groban<br/><span class="grey">Reel</span></a></li>
            
            <li class="last"><a href="./#/3" id="v3">Chris Groban<br/><span class="grey">Reel</span></a></li>
            
        </ul>
    </div>
    
    <div class="content" id="c-bio">
        <div id="c-bio-text">
            <p><span class="ColabBol">Chris Groban</span> lives in Los Angeles, CA where he writes and directs music videos, commercials, and documentaries.</p>
            <p>His hobbies include eating lox on a bagel and telling you to be quiet in movies.</p>
        </div>
    </div>
    
    <div class="content" id="c-contact">
        <div id="c-contact-text">
            <p>Michael Appel</p>
            <p><a href="mailto:michaelfappel@gmail.com">michaelfappel@gmail.com</a></p>
        </div>
    </div>
    
    
</div>

<script type="text/javascript">
$(document).ready(function() {
    $("#videos").click(function() {
        $("#c-bio").hide();
        $("#c-contact").hide();
        $("#c-videos").show();
    });
    $("a#bio").click(function() {
        $("#c-videos").hide();
        $("#c-contact").hide();
        $("#c-bio").show();
    });
    $("a#contact").click(function() {
        $("#c-videos").hide();
        $("#c-bio").hide();
        $("#c-contact").show();
  
    });
});
</script>

</body>
</html>
