$(document).ready(function () {    
    $('.burger__button').click(() => {
        $('.burger__inner').slideToggle();
    });

    var resizeMenu = function() {
        var navbarWidth = $('.navbar').width();
        
        // Ширина материала, которая должена быть всегда видимым
        var fixedWidth = $('.brand').width() + $('.menu--strong').width();

        // Оставшаяся ширина, которую может занять меню
        var availableWidth = navbarWidth - fixedWidth;
        
        resizeMenuToWidth(availableWidth);
    };

    var resizeMenuToWidth = function(availableWidth) {
        var widthSoFar = 0;
        
        // Iterate through menu items
        // $('.menu a').each(function() {
        let menuItems = $('.menu--expand .menu__item');
        console.log(menuItems);
        menuItems.each(function() {
            // console.log(this);
            var itemWidth = $(this).outerWidth(true);
            // console.log(itemWidth);

            // Если ширина меню уже превысила доступное пространство,
            // или если этот пункт меню заставит его превышать пространство
            if( (widthSoFar > availableWidth) || (widthSoFar + itemWidth > availableWidth) ) {
                // То скрываем пункт
                $(this).hide();
            } else {
                // В противном случае, показать пункт меню, и наращиваем счет ширины 
                $(this).show();
                widthSoFar += itemWidth;
            }
        });
    };
    
    // Изменить размер меню, когда страница загружается
    resizeMenu();
    
    // Also resize menu when the window is resized
    $(window).resize(resizeMenu);
});