<?php
    include './inc/Mobile_Detect.php';
    $detect = new Mobile_Detect;

    if ($detect->isMobile()) {
        header('Location: http://www.chrisgroban.com/mobile/');
    } else {
        require_once('index.html');
    }
