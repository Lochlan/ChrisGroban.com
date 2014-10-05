<?php
    include './inc/Mobile_Detect.php';
    $detect = new Mobile_Detect;

    if ($detect->isMobile()) {
        header('Location: mobile/');
    } else {
        require_once('index.html');
    }
