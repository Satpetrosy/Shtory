/*sol section*/
$(document).ready(function(){

    $(".navbar-btn").click(function(){
        $(".nav-menu").toggleClass("open");
    });

    $('#sol-section2').owlCarousel({
        loop:true,
        navText : ["<img src='images/Shtory_Landing32.png'>","<img src='images/Shtory_Landing31.png'>"],
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});


/*sol section end*/



/*vidio start*/

var myVideo = document.getElementById("video1");

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig() {
    myVideo.width = 560;
}

function makeSmall() {
    myVideo.width = 320;
}

function makeNormal() {
    myVideo.width = 420;
}

/*vidio end*/


/*section partners*/
$(document).ready(function(){

    $(".navbar-btn").click(function(){
        $(".nav-menu").toggleClass("open");
    });

    $('#partners').owlCarousel({
        loop:true,
        navText : ["<img src='images/Shtory_Landing32.png'>","<img src='images/Shtory_Landing31.png'>"],
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:6
            }
        }
    })

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});


/*section sol-section2*/

$(document).ready(function(){

    $(".navbar-btn").click(function(){
        $(".nav-menu").toggleClass("open");
    });

    $('#sol-section2').owlCarousel({
        loop:true,
        navText : ["<img src='images/Shtory_Landing32.png'>","<img src='images/Shtory_Landing31.png'>"],
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});


/*section textures*/
$(document).ready(function(){

    $(".navbar-btn").click(function(){
        $(".nav-menu").toggleClass("open");
    });

    $('#textures').owlCarousel({
        loop:true,
        navText : ["<img src='images/Shtory_Landing32.png'>","<img src='images/Shtory_Landing31.png'>"],
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});





