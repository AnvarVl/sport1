
$(document).ready(function(){

    $(".auth_buttons").click(function(){
        $(this).next().slideToggle();
    });

    $(".popup-content").magnificPopup({
        type : 'inline'
        // gallery: {
        //  enabled : true
        // }
    });
    
    $('.owl-carousel').owlCarousel({
		// Наиболее важные особенности
		items : 1,
		itemsCustom : false,
		itemsDesktop : [300,1],
		itemsDesktopSmall : false,
		itemsTablet: [300,1],
        itemsTabletSmall: false,
        itemsMobile : [300,1],
        singleItem : false,
        itemsScaleUp : false,
        autoWidth:false,
        loop:true,

    //Базовая скорость
    slideSpeed : 300,
    paginationSpeed : 800,
    rewindSpeed : 1000,

    //Автозапуск слайдов
    autoPlay : true,
    stopOnHover : false,

    // Навигация (вперед-назад)
    // navigation : true,
    // navigationText : ["prev","next"],
    // rewindNav : true,
    // scrollPerPage : false,

    //Пагинация (слайд 1,2,3...)
    pagination : true,
    paginationNumbers: false,

    // Адаптивность
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,

    // CSS стили
    baseClass : "owl-carousel",
    theme : "owl-theme",

    //Lazy load (для изображений)
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",

    //Автоматическое определение высоты блоков
    autoHeight : false,

    //JSON 
    jsonPath : false, 
    jsonSuccess : false,

    //События мышки
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,

    //Transitions
    transitionStyle : false,

    // Другое
    addClassActive : false,

    //Callbacks
    beforeUpdate : false,
    afterUpdate : false,
    beforeInit: false, 
    afterInit: false, 
    beforeMove: false, 
    afterMove: false,
    afterAction: false,
    startDragging : false,
    afterLazyLoad : false
});


});
