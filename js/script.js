$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    })

    var typed = new Typed(".typed", {
strings: ["","Web Developer", "React", "Node.js", "MongoDB", "Javascript", "HTML/CSS"],
typeSpeed: 150, 
loop: true,
startDelay: 1000,
showCursor: false
    })

})

