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

            // // When I on 1
            // if (index == 1) {
            //     $('.land, .gif1').fadeIn(300);
            //     // Then I go to 2
            //     if (nextIndex == 1) {
            //     $('.land, .gif1').fadeOut(300);
            //     }
            // }
            //
            // // When I on 2
            // if (index == 2) {
            //     // Then I go to 1
            //     if (nextIndex == 1) {
            //     $('.land, .gif1').fadeOut(300);
            //     }
            //     // or go to 3
            //     else if (nextIndex == 3) {
            //         // $('.land').show();
            //         $('.gif1').fadeOut();
            //         $('.gif2').fadeIn();
            //     }
            //     else {
            //         $('.gif1').hide();
            //     }
            //
            // }
            //
            // // When I on 3
            // if (index == 3) {
            //     // Then I go to 2
            //     if (nextIndex == 2 && direction == 'up') {
            //     $('.gif2').fadeOut(300);
            //     $('.gif1').fadeIn();
            //     }
            //     // or go to 3
            //     else if (nextIndex == 4) {
            //         $('.gif2').fadeOut();
            //         $('.gif3').fadeIn();
            //     }
            //     else {
            //         $('.gif2').hide();
            //     }
            // }
            //
            //  // When I on 4
            // if (index == 4) {
            //     // Then I go to 2
            //     if (nextIndex == 3 && direction == 'up') {
            //     $('.gif3').fadeOut(300);
            //     $('.gif2').fadeIn();
            //     }
            //     // or go to 3
            //     else if (nextIndex == 5) {
            //         $('.gif3').fadeOut();
            //         $('.gif4').fadeIn();
            //     }
            //     else {
            //         $('.gif3').hide();
            //     }
            // }
            //
            //  // When I on 5
            // if (index == 5) {
            //     // Then I go to 2
            //     if (nextIndex == 4 && direction == 'up') {
            //     $('.gif4').fadeOut(300);
            //     $('.gif3').fadeIn();
            //     }
            //     // or go to 3
            //     else if (nextIndex == 6) {
            //         $('.gif4').fadeOut();
            //     }
            //     else {
            //         $('.gif4').hide();
            //     }
            // }


            // page 2
            if(nextIndex == 2) {
                $('.land, .gif1').fadeIn(200);
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
            else if(nextIndex == 3 && direction =='up') {
                $('.gif4').fadeOut();
            }

            else {
                $('.gif4').fadeOut();
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



//When I on index 1

// If (index==1) {
// // when I go to index2
// if (nextIndex==2) {
// $('.gif1, .land').fadeIn();
// }
// else {
// $('.land').show();
// }

// //When I on index 2

// If (index==2) {
// // when I go to index1
// if (nextIndex==1) {
// $('.gif1, .land').fadeOut();
// }
// //when I go to index3
// else if (nextIndex == 3) {
// $('.gif1').fadeOut();
// $('.gif2').fadeIn();
// }
// //when I go to other index


// //When I on index 3

// If (index==3) {
// // when I go to index2
// if (nextIndex==2) {
// $('.gif2').fadeOut();
// }
// //when I go to index4
// else if (nextIndex == 4) {
// $('.gif2').fadeOut();
// $('.gif3').fadeIn();
// }

// //When I on index 4

// If (index==4) {
// // when I go to index3
// if (nextIndex==3) {
// $('.gif3').fadeOut();
// }
// //when I go to index5
// else if (nextIndex == 5) {
// $('.gif3').fadeOut();
// $('.gif4').fadeIn();
// }

// //When I on index 5

// If (index==5) {
// // when I go to index4
// if (nextIndex==4) {
// $('.gif4').fadeOut();
// }
// //when I go to index6
// else if (nextIndex == 6) {
// $('.gif4').fadeOut();
// $('.gif5').fadeIn();
// }

// //When I on index 6

// If (index==6) {
// // when I go to index5
// if (nextIndex==5) {
// $('.gif4').fadeOut();
// }