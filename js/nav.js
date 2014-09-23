$(function(){
    /* function to make the thumbs menu scrollable */
    function buildThumbs($elem){
        var $wrapper = $elem.next();
        var $menu = $wrapper.find('.sc_menu');
        var inactiveMargin = 150;
        /* move the scroll down to the
        beggining (move as much as the height of the menu) */
        $wrapper.scrollTop($menu.outerHeight());

        /* when moving the mouse up or down, the wrapper moves (scrolls) up or down */
        $wrapper.on('mousemove',function(e){
            var wrapperHeight = $wrapper.height();
            var menuHeight = $menu.outerHeight() + 2 * inactiveMargin;
            var top = (e.pageY - $wrapper.offset().top) * (menuHeight - wrapperHeight) / wrapperHeight - inactiveMargin;
            $wrapper.scrollTop(top+10);
        });
    }

    var stacktime;

    //MENU
    $('#menu li > a').on('mouseover', function () {
        var $this = $(this);
        if( $this.is(".js-navlink1") ){
            $('.js-mirror_1').show();
            $('.js-nav_menu_1').find('*').css('visibility', 'visible');
        } else if( $this.is(".js-navlink2") ){
            $('.js-mirror_2').show();
            $('.js-nav_menu_2').find('*').css('visibility','visible');
        } else if( $this.is(".js-navlink3") ){
            $('.js-mirror_3').show();
            $('.js-nav_menu_3').find('*').css('visibility','visible');
        }

        buildThumbs($this);

        var pos = $this.next().find('a').size();
        var f = function(){
            if(pos==0) clearTimeout(stacktime);
            --pos;
        };
        /* each thumb will appear with a delay */
        stacktime = setInterval(f , 50);
    });

    /* on mouseleave of the whole <li> the scrollable area is hidden */
    $('#menu li').on('mouseleave',function () {
        var $this = $(this);
        clearTimeout(stacktime);

        $this.find('.sc_menu').css('visibility','hidden').find('a').css('visibility','hidden');
        $this.find('.sc_menu_wrapper').css('visibility','hidden');
        $this.find('.sc_menu_wrapper2').css('visibility','hidden');

        if( $this.is("#li1") ){
            $('.js-mirror_1').hide();
            $('.js-nav_menu_1').find('*').css('visibility', 'hidden');
        } else if( $this.is("#li2") ){
            $('.js-mirror_2').hide();
            $('.js-nav_menu_2').find('*').css('visibility','hidden');
        } else if( $this.is("#li3") ){
            $('.js-mirror_3').hide();
            $('.js-nav_menu_3').find('*').css('visibility','hidden');
        }
    });

    /* when hovering a thumb, change its opacity */
    $('.sc_menu a').hover(
        function () {
            var $this = $(this);
            $this.find('img')
            .stop()
            .animate({'opacity':'0'},400);
        },
        function () {
            var $this = $(this);
            $this.find('img')
            .stop()
            .animate({'opacity':'1.0'},400);
        }
    );
});
