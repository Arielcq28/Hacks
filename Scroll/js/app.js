const pageSections = new fullpage('#fullpage', {

    //Basics
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css: true,
    easingcss3: 'ease-out',
    loopBottom: true,

    //Nav
    navigation: true,
    menu: '#menu',
    anchors: ['inicio', 'productos', 'contacto'],
    navigationTooltips: ['Inicio', 'Productos', 'Contacto'],
    showActiveTooltip: false,

    //Secciones
    sectionsColor: ['#000', '#c2c2c2', '#000'],
    verticalCentered: true,

    // Slides
    controlArrows: true,
    slidesNavigation: false,

    //Footer
    afterLoad: function(origin, destination){
        if(destination.anchor === 'contacto'){
            document.querySelector('.footer h2').style.opacity = 1;
        }
    }


}); //Create new instance for FullPage.js
