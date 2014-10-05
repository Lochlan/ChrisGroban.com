$(function(){
    /* function to make the thumbs menu scrollable */
    function buildThumbs($elem) {
        var $wrapper = $elem.next();
        var $menu = $wrapper.find('.js-sc_menu');
        var inactiveMargin = 150;
        // move the scroll down to the beggining (move as much as the height of the menu)
        $wrapper.scrollTop($menu.outerHeight());

        // when moving the mouse up or down, the wrapper moves (scrolls) up or down
        $wrapper.on('mousemove',function(e){
            var wrapperHeight = $wrapper.height();
            var menuHeight = $menu.outerHeight() + 2 * inactiveMargin;
            var top = (e.pageY - $wrapper.offset().top) * (menuHeight - wrapperHeight) / wrapperHeight - inactiveMargin;
            $wrapper.scrollTop(top + 10);
        });
    }

    //MENU
    $('.js-nav_link').on('mouseover', function () {
        $('.js-mirror[data-nav="' + $(this).data('nav') + '"]').show();
        $('.js-sc_menu_wrapper[data-nav="' + $(this).data('nav') + '"]').css('visibility','visible');
        buildThumbs($(this));
    });

    /* on mouseleave of the whole <li> the scrollable area is hidden */
    $('.js-nav_menu_container').on('mouseleave',function () {
        $('.js-mirror').hide();
        $('.js-sc_menu_wrapper').css('visibility','hidden');
    });

    /* when hovering a thumb, change its opacity */
    $('.js-sc_menu a').hover(
        function () {
            $(this).find('img')
                .stop()
                .animate({'opacity':'0'}, 400);
        },
        function () {
            $(this).find('img')
                .stop()
                .animate({'opacity':'1.0'}, 400);
        }
    );
});
