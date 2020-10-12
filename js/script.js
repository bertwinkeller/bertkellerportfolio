$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    })

    var typed = new Typed(".typed", {
        strings: ["", "Full Stack Software Engineer", "React", "Node.js", "MongoDB", "Javascript", "HTML/CSS"],
        typeSpeed: 150,
        loop: true,
        startDelay: 1000,
        showCursor: false
    })


    $('.owl-carousel').owlCarousel({
        loop: true,
        items:4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })



    const skillsTopOffset = $(".skillsSection").offset().top

    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

            $('.chart').easyPieChart({
                //your options goes here
                easing: 'easeInOut',
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find(
                        '.percent'
                    ).text(Math.round(percent))
                }
            })
        }
    })

    $("#nav li a").click(function(e) {
        e.preventDefault()


        const targetElement = $(this).attr("href")
        const targetPosition = $(targetElement).offset().top
        $("html, body").animate({
            scrollTop: targetPosition - 50
        }, "slow")
    })


    const nav = $("#nav")
    const navTop = nav.offset().top

    $(window).on("scroll", stickyNavigation)


    function stickyNavigation() {
        const body = $("body")

        if($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight() + "px")
            body.addClass("fixedNav")
        }else{
            body.css("padding-top", 0)

            body.removeClass("fixedNav")
        }
    }

    $('.card').mouseenter(function(){
        $(this).find('.card-overlay').css({'top': '-100%'})
        $(this).find('.card-hover').css({'top': '0'})
        
    }).mouseleave(function(){
        $(this).find('.card-overlay').css({'top': '0'})
        $(this).find('.card-hover').css({'top': '100%'})
    })
})

