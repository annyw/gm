$(document).ready(function() {
    // Fullpage
    $('#fullpage').fullpage({

        //Navigation

        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixSection', 'seventhSection'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [' ', '公關', '視設', '行銷', '工程', '策劃', '評審'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 750,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: true,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#B3D9EB', '#B3D9EB', '#B3D9EB', '#B3D9EB', '#B3D9EB', '#B3D9EB', '#B3D9EB'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.vertical-scrolling',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            console.log("Index: " + index );
            console.log("Next Index: " + nextIndex );

            // page 2
            if(nextIndex == 2) {
                $('.gif1, .land').fadeIn(200);
            }
            else if(nextIndex == 1) {
                $('.land, .gif1').fadeOut();
            }
            else {
                $('.gif1').fadeOut();
            }

            // page 3
            if(nextIndex == 3) {
                $('.gif2').fadeIn();
            }
            else if(nextIndex == 2 && direction =='up') {
                $('.gif2').fadeOut();
            }
            else {
                $('.gif2').fadeOut();
            }

            // page 4
            if(nextIndex == 4) {
                $('.gif3').fadeIn();
            }
            else if(nextIndex == 3 && direction =='up') {
                $('.gif3').fadeOut();
            }

            else {
                $('.gif3').fadeOut();
            }

            // page 5
            if(nextIndex == 5) {
                $('.gif4').fadeIn();
            }
            else if(nextIndex == 4 && direction =='up') {
                $('.gif4').fadeOut();
            }

            else {
                $('.gif4').fadeOut();
            }

            // page 6
            if(nextIndex == 6) {
                $('.gif5').fadeIn();
            }
            else if(nextIndex == 5 && direction =='up') {
                $('.gif5').fadeOut();
            }

            else {
                $('.gif5').fadeOut();
            }

            // page 7
            if(nextIndex == 7) {
                $('.gif6').fadeIn();
            }
            else if(nextIndex == 6 && direction =='up') {
                $('.gif6').fadeOut();
            }

            else {
                $('.gif6').fadeOut();
            }

            if(index == 1 && nextIndex == 3) {
                 $('.gif2, .land').fadeIn(200);
            }
          
            if(index == 1 && nextIndex == 4) {
                 $('.gif3, .land').fadeIn(200);
            }
          
            if(index == 1 && nextIndex == 5) {
                 $('.gif4, .land').fadeIn(200);
            }

            if(index == 1 && nextIndex == 6) {
                 $('.gif5, .land').fadeIn(200);
            }
          
            if(index == 1 && nextIndex == 7) {
                 $('.gif6, .land').fadeIn(200);
            }
        },

        afterLoad: function(anchorLink, index){
            $('.box-head').addClass('seperate');
        },

        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });

        
    });