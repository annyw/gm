// variables
var $header_top = $('.header-top');
var $nav = $('nav');


// toggle menu
$header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
});

// fullpage customization
$('#fullpage').fullpage({
	scrollHorizontally: true,
    sectionsColor: ['#B3D9EB'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixSection'],
    menu: '#menu',
    afterLoad: function(anchorLink, index) {
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
        // if (index == ) {
        //     $('#fp-nav').hide();
        // }
    },

    onLeave: function(index, nextIndex, direction){
        //leaving 1st section
        if(index == 1){
           $('.hide').addClass('show');
        }
        //back to the 1st section
        if(nextIndex == 1){
            $('.hide').removeClass('show');
        }

        //leaving 1st section
        if(index == 1){
           $('.hide').fadeIn();
        }
        //back to the 1st section
        if(nextIndex == 1){
            $('.hide').fadeOut();
        }
    
    },

    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
        if (anchorLink == 'fifthSection' && slideIndex == 1) {
            $.fn.fullpage.setAllowScrolling(false, 'up');
            $header_top.css('background', 'transparent');
            $nav.css('background', 'transparent');
            $(this).css('background', '#374140');
            $(this).find('h2').css('color', 'white');
            $(this).find('h3').css('color', 'white');
            $(this).find('p').css({
                'color': '#DC3522',
                'opacity': 1,
                'transform': 'translateY(0)'
            });
        }
    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction) {
        if (anchorLink == 'fifthSection' && slideIndex == 1) {
            $.fn.fullpage.setAllowScrolling(false, 'up');
            $header_top.css('background', 'rgba(0, 47, 77, .3)');
            $nav.css('background', 'rgba(0, 47, 77, .25)');
        }
    }
});
