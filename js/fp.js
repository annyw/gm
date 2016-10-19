$(document).ready(function() {
    $('#fullpage').fullpage({

        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixSection'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['首頁', '視設', '公關', '宣傳'],
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
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#B3D9EB', '#B3D9EB', '#B3D9EB', '#B3D9EB', '#B3D9EB', '#B3D9EB',],
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

            if(nextIndex == 2) {
                $('.land').addClass('add');
            }

           else if(nextIndex == 1 && direction =='up') {
                $('.land').removeClass('add');
            }
            
           

            // if(nextIndex == 3) {
            //     $('.gif2').fadeIn(300);
            // }
            // else if(nextIndex == 2 && direction =='up') {
            //     $('.gif2').fadeOut(300);
            // }
            // else {
            //     $('.gif2').hide();
            // }


            // if(nextIndex == 4) {
            //     $('.gif3').fadeIn(300);
            // }
            // else if(nextIndex == 3 && direction =='up') {
            //     $('.gif3').fadeOut(300);
            // }

            // else {
            //     $('.gif3').hide();
            // }
            // }

            // console.log(index);
        },

        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });

         $('.box-head').addClass('seperate');
    });

