
let loading_finished =0;
var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#F0EBDB', '#0A3CD1', '#E4F87A','#E4F87A', '#0A3CD1'],
    anchors: ['firstPage', 'secondPage', '3rdPage','4thPage','5thPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['what we do', 'atom&bits', 'about us','what we experienced','contact'],
    afterLoad: function (origin, destination, direction) {
        if (destination.index == 0 && loading_finished == 1) {
            keywords_in_animation_after.play(); //0번페이지 로딩 (keywords)
        }
        if (destination.index == 1) {
            aboutus_in_animation.play();//1번페이지 로딩 (aboutus)
        }
        if (destination.index == 2) {}
    },
    onLeave: function (origin, destination, dirction) {
        if (origin.index == 0) {
            loading_finished = 1;
            keywords_out_animation.play();
        }
        if (origin.index == 1) {
            aboutus_out_animation.play();
        }
    }
});

//영상 마우스 오버 일시정지 및 색 변화
var mql = window.matchMedia("screen and (max-width: 768px)");
if(mql.matches)
{document.querySelector("#firstvideo > source").src = "/resources/videos/Horizontal_kinetic.mp4";
document.querySelector("#secondvideo > source").src = "/resources/videos/Horizontal_interactive.mp4";
document.querySelector("#thirdvideo > source").src = "/resources/videos/Horizontal_immersive.mp4";
document.querySelector("#firstvideo").poster="/resources/kineticThumbnail.png";
document.querySelector("#secondvideo").poster="/resources/interactiveThumbnail.png";
document.querySelector("#thirdvideo").poster="/resources/immersiveThumbnail.png";
}
else{
  document.querySelector("#firstvideo > source").src = "/resources/videos/vertical_kinetic.mp4";
  document.querySelector("#secondvideo > source").src = "/resources/videos/vertical_interactive.mp4";
  document.querySelector("#thirdvideo > source").src = "/resources/videos/vertical_immersive.mp4";
}
for( var i =0 ; i<document.getElementsByTagName("video").length;i++)
{
  document.getElementsByTagName("video")[i].load();
}

document.getElementsByClassName("firstvideo-over")[0].addEventListener("mouseover", FirstmouseOver);
document.getElementsByClassName("firstvideo-over")[0].addEventListener("mouseout", FirstmouseOut);
document.getElementsByClassName("secondvideo-over")[0].addEventListener("mouseover", SecondmouseOver);
document.getElementsByClassName("secondvideo-over")[0].addEventListener("mouseout", SecondmouseOut);
document.getElementsByClassName("thirdvideo-over")[0].addEventListener("mouseover", ThirdmouseOver);
document.getElementsByClassName("thirdvideo-over")[0].addEventListener("mouseout", ThirdmouseOut);

function FirstmouseOver() {
 document.getElementById("firstvideo").play();
 document.getElementsByClassName("firstvideocover")[0].style.background= 'rgba(10, 60, 209, 0)';
 var letters= document.getElementsByClassName("letters-1")[0];
 letters.style.background= 'rgba(10,60,209,0.77)';
 letters.style.color='rgba(228,248,122,1)';
}
function FirstmouseOut() {
 document.getElementById("firstvideo").pause();
 document.getElementsByClassName("firstvideocover")[0].style.background= 'rgba(10, 60, 209, 0.85)';
 var letters= document.getElementsByClassName("letters-1")[0];
 letters.style.background= 'rgba(228,248,122,1)';
 letters.style.color='rgba(11,54,188,1)';
}
function SecondmouseOver() {
 document.getElementById("secondvideo").play();
 document.getElementsByClassName("secondvideocover")[0].style.background= 'rgba(10, 60, 209, 0.0)';
 var letters= document.getElementsByClassName("letters-2")[0];
 letters.style.background= 'rgba(10,60,209,0.77)';
 letters.style.color='rgba(228,248,122,1)';
}
function SecondmouseOut() {
 document.getElementById("secondvideo").pause();
 document.getElementsByClassName("secondvideocover")[0].style.background= 'rgba(10, 60, 209, 0.85)';
 var letters= document.getElementsByClassName("letters-2")[0];
 letters.style.background= 'rgba(228,248,122,1)';
 letters.style.color='rgba(11,54,188,1)';
}
function ThirdmouseOver() {
 document.getElementById("thirdvideo").play();
 document.getElementsByClassName("thirdvideocover")[0].style.background= 'rgba(10, 60, 209, 0)';
 var letters= document.getElementsByClassName("letters-3")[0];
 letters.style.background= 'rgba(10,60,209,0.77)';
 letters.style.color='rgba(228,248,122,1)';
}
function ThirdmouseOut() {
  document.getElementById("thirdvideo").pause();
  document.getElementsByClassName("thirdvideocover")[0].style.background= 'rgba(10, 60, 209, 0.85)';
  var letters= document.getElementsByClassName("letters-3")[0];
  letters.style.background= 'rgba(228,248,122,1)';
  letters.style.color='rgba(11,54,188,1)';
}


//video

var video_in_animation = anime({ 
  targets: '.video-container',
 // scale:[0.2,1],
  easing: 'easeOutQuad',
  translateY:[200,0],
  opacity: [0,1],
  duration: 500,
  delay: anime.stagger(500)
});


//keywords
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = [1,3];
ml4.durationIn = 500;
ml4.durationOut = 200;
ml4.delay = 500;

var keywords_out_animation = anime.timeline({loop: false,autoplay:false}) //사라짐 애니메이션( 이게 위로가야함, 초기셋팅으로 준비하게되는듯)
.add({
  targets: '.keywords .letter-wrapper',
  opacity: [1,0],
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",

});


var keywords_in_animation = anime.timeline({loop: false})
  .add({
    targets: ['.keywords .letter-wrapper','.videx-wrap'],
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    delay:1500,
    duration:500
});


var keywords_in_animation_after = anime.timeline({loop: false, autoplay:false})
  .add({
    targets: '.keywords .letter-wrapper',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration:500
});


//aboutus

var aboutus_out_animation = anime({ //destination index1, aboutus out 애니메이션
  targets: '.aboutus-contents',
//  color: ['rgba(0,0,0,1)','rgba(0, 0, 0, 0)'],
  easing: 'easeOutQuad',
  duration: 300,
  autoplay: false,
  opacity: [1,0],
  delay: anime.stagger(50)
});

var aboutus_in_animation = anime({ //destination index1, aboutus in 애니메이션
  targets: '.aboutus-contents',
  opacity: [0,1],
  easing: 'easeInQuad',
  duration: 500,
//  color: 'rgba(0, 0, 0, 1)',
  autoplay: false,
  delay: anime.stagger(200)
});

















/*

var keywords_in_animation = anime.timeline({loop: false})
  .add({
    targets: '.keywords .wrapper1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    color:ml4.colorin,
    delay:1500,
  //  backgroundColor:ml4.bcolorin,
    duration: ml4.durationIn
  }).add({
    targets: '.keywords .wrapper2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    color:ml4.colorin,
  //  backgroundColor:ml4.bcolorin,
    duration: ml4.durationIn
  }).add({
    targets: '.keywords .wrapper3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    color:ml4.colorin,
   // backgroundColor:ml4.bcolorin,
    duration: ml4.durationIn
  });
*/
