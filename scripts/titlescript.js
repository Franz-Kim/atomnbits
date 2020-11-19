var startbuttone = document.querySelector('.startbutton');
const mouseClickAnimation =()=>{
    anime({
        targets: '.square',
       // translateY : -document.documentElement.clientHeight,
       translateY:-window.innerHeight,
        easing: 'easeInQuint',
        loop: false,
        duration: 1000
    });

    setTimeout(function () {
        document.getElementsByClassName("square")[0].style.top = "100%";
       window.location.href = "main.html";
     }, 1100);
    
}

startbuttone.addEventListener('click', mouseClickAnimation)
