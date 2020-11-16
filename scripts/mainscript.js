
let loading_finished =0;
var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#F0EBDB', '#FE6541', '#3A8273', '#F0EBDB'],
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['what we do', 'atom&bits', 'about us','contact'],
    afterLoad: function (origin, destination, direction) {
        if (destination.index == 0 && loading_finished == 1) {
            keywords_in_animation.play(); //0번페이지 로딩 (keywords)
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


//aboutus
var aboutus_in_animation = anime({ //destination index1, aboutus in 애니메이션
    targets: '.aboutus-contents',
    opacity: 1,
    easing: 'easeInQuad',
    duration: 500,
    color: 'rgba(0, 0, 0, 1)',
    autoplay: false,
    delay: anime.stagger(200)
});
var aboutus_out_animation = anime({ //destination index1, aboutus out 애니메이션
    targets: '.aboutus-contents',
    color: ['rgba(0,0,0,1)','rgba(0, 0, 0, 0)'],
    easing: 'easeOutQuad',
    duration: 300,
    autoplay: false,
    delay: anime.stagger(50)
});

//video
var video_in_animation = anime({ 
  targets: '.video-container',
  //scale:[0.2,1],
  translateX:[100,0],
  opacity: [0,1],
  duration: 500,
  delay: anime.stagger(200)
});


//keywords
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = [1,3];
ml4.durationIn = 500;
ml4.durationOut = 200;
ml4.delay = 500;
ml4.colorin = ['rgba(0,0,0,0)','rgba(0,0,0,1)'];
ml4.colorout= ['rgba(0,0,0,1)','rgba(0,0,0,0)'];
var keywords_in_animation = anime.timeline({loop: false})
  .add({
    targets: '.keywords .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    color:ml4.colorin,
    duration: ml4.durationIn
  }).add({
    targets: '.keywords .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    color:ml4.colorin,
    duration: ml4.durationIn
  }).add({
    targets: '.keywords .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    color:ml4.colorin,
    duration: ml4.durationIn
  });
  var keywords_out_animation = anime.timeline({loop: false,autoplay:false})
  .add({
    targets: '.keywords .letters-1',
    opacity: [1,0],
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",

  }).add({
    targets: '.keywords .letters-2',
    opacity: [1,0],
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
  }).add({
    targets: '.keywords .letters-3',
    opacity: [1,0],
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
  });

