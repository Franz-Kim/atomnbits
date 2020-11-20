var startbuttone = document.querySelector('.startbutton');
var everthing = document.body;
const mouseClickAnimation =()=>{
    anime({
       // targets: '.square',
       targets: everthing,
       // translateY : -document.documentElement.clientHeight,
       translateY:-window.innerHeight,
        easing: 'easeInQuint',
        loop: false,
        duration: 1000
    });

    setTimeout(function () {
        var mql = window.matchMedia("screen and (max-width: 768px)");
        if (mql.matches) {
            anime({
                targets: 'everthing',
                // translateY : -document.documentElement.clientHeight,
                translateY: window.innerHeight,
                easing: 'easeInQuint',
                loop: false,
                duration: 100
            });
        }
        window.location.href = "main.html";

      

    }, 1100);
    
}

startbuttone.addEventListener('click', mouseClickAnimation)
