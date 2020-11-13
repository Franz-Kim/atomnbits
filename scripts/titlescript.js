var startbuttone = document.querySelector('.startbutton');

const mouseClickAnimation =()=>{
    anime({
        targets: '.square',
        translateY : -document.documentElement.clientHeight,
        easing: 'easeInQuint',
        loop: false,
        duration: 1000
    });

    setTimeout(function () {
        window.location.href = "main.html";
     }, 1000);
    
}

startbuttone.addEventListener('click', mouseClickAnimation)
