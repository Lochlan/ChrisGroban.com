$(function(){
    /* function to make the thumbs menu scrollable */
    function buildThumbs($elem){
        var $wrapper    	= $elem.next();
        var $menu 		= $wrapper.find('.sc_menu');
        var inactiveMargin 	= 150;
        /* move the scroll down to the
        beggining (move as much as the height of the menu) */
        $wrapper.scrollTop($menu.outerHeight());

        /* when moving the mouse up or down, the wrapper moves (scrolls) up or down */
        $wrapper.bind('mousemove',function(e){
            var wrapperHeight 	= $wrapper.height();
            var menuHeight 	= $menu.outerHeight() + 2 * inactiveMargin;
            var top 	= (e.pageY - $wrapper.offset().top) * (menuHeight - wrapperHeight) / wrapperHeight - inactiveMargin;
            $wrapper.scrollTop(top+10);
        });
    }

    var stacktime;

    //MENU  
    $('#menu li > a').bind('mouseover',function () {
        var $this = $(this);

        buildThumbs($this);

        var pos	=	$this.next().find('a').size();
        var f	=	function(){
            if(pos==0) clearTimeout(stacktime);
            $this.next().find('a:nth-child('+pos+')').css('visibility','visible');
            --pos;
        };
        /* each thumb will appear with a delay */
        stacktime = setInterval(f , 50);
    });

    /* on mouseleave of the whole <li> the scrollable area is hidden */
    $('#menu li').bind('mouseleave',function () {
        var $this = $(this);
        clearTimeout(stacktime);
        $this.find('.sc_menu').css('visibility','hidden').find('a').css('visibility','hidden');
        $this.find('.sc_menu_wrapper').css('visibility','hidden');
        $this.find('.sc_menu').css('visibility','hidden').find('span').css('visibility','hidden');
        $this.find('.sc_menu_wrapper2').css('visibility','hidden');
    });

    /* when hovering a thumb, change its opacity */
    $('.sc_menu a').hover(
        function () {
            var $this = $(this);
            $this.find('img')
            .stop()
            .animate({'opacity':'1.0'},400);
        },
        function () {
            var $this = $(this);
            $this.find('img')
            .stop()
            .animate({'opacity':'0.3'},400);
        }
    );
});