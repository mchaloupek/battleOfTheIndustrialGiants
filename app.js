$(function(){

//making everthing bounce like there could be monsters fighting in the bg
//if you wanna turn this off so you can work just comment it out. all this is doing is using the animate.css thing that i put in the head on the index. if you wanna look more into it, they have a git page for documentation: https://github.com/daneden/animate.css
  $('.castleMain').addClass('animated bounce infinite');
  $('.castleleftleft').addClass('animated bounce infinite');
  $('.castleLeft').addClass('animated bounce infinite');
  $('.castleRight').addClass('animated bounce infinite');
  $('.castlerightright').addClass('animated bounce infinite');
  $('.leftbehind').addClass('animated bounce infinite');
  $('.rightbehind').addClass('animated bounce infinite');
  $('.behindbehind').addClass('animated bounce infinite');

  $('.gozilla').addClass('animated pulse infinite');
  $('.mothra').addClass('animated pulse infinite');

// $('.castleMain').click(function() {
//
//   $('html').animate({background-color: rgb(255, 180, 0)}, 1000, function())
//
// });

//*********************NEW TO THIS AND TRYING IT*************


  // $('html').animate({backgroundColor: 'rgb(255, 180, 0)'}).delay(1000)
  // $('html').animate({backgroundColor: 'rgb(0, 0, 180)'}).delay(1000)
  //
  // $('html').animate({backgroundColor: 'rgb(255, 180, 0)'}).delay(1000)
  // $('html').animate({backgroundColor: 'rgb(0, 0, 180)'}).delay(1000)



// **** IT WORKED ****


setInterval(function(){
  $('html').animate({backgroundColor: 'rgb(255, 180, 0)'}).delay(1000)
  $('html').animate({backgroundColor: 'rgb(0, 0, 180)'}).delay(1000)
}, 1000);






//   function skyy() {
//
//     var skyy = background-color
//     var dayy = #ffa100
//
//     if (skyy = #0000b4) {
//
//       $('html').animate({backgroundColor: 'rgb(255, 180, 0)'});
//
//     }
//
//     if (skyy = dayy) {
//
//
//       $('html').animate({backgroundColor: 'rgb(0, 0, 180)'});
//
//     }
//
//
//
//
//   }
//
//
// skyy();





})
