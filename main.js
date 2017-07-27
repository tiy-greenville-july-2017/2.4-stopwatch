// alert('working!!');
(function(){
  'use strict';
  var timerId = 0;
  var startTime = new Date();
  var startButton = document.querySelector('#start-button');  // document.getElementById('start-button');
  var hours = document.querySelector('.hours');
  var minutes = document.querySelector('.minutes');
  var seconds = document.querySelector('.seconds');

  // console.log(hours, minutes, seconds);

  function toggleButton(){
    var currentText = startButton.textContent;
    console.log(currentText);

    if(currentText === 'Start'){
      startButton.textContent = 'Stop';
      startButton.style.backgroundColor = 'red';
    }else{
      startButton.textContent = 'Start';
      startButton.style.backgroundColor = 'green';
    }
  }

  function millisecondsToInterval(elapsedMs){
    var msLeft = elapsedMs;

    var msInHour = 60000 * 60;
    var msInMinute = 60000;
    var msInSecond = 1000;

    var hourCount = Math.floor(msLeft / msInHour);
    msLeft = msLeft % msInHour;

    var minuteCount = Math.floor(msLeft / msInMinute);
    msLeft = msLeft % msInMinute;

    var secondCount = Math.floor(msLeft / msInSecond);

    return [hourCount, minuteCount, secondCount];
  }

  function zeroPad(interval){
      var paddedHours = ("0" + interval[0]).slice(-2);
      var paddedMinutes = ("0" + interval[1]).slice(-2);
      var paddedSeconds = ("0" + interval[2]).slice(-2);

      return [paddedHours, paddedMinutes, paddedSeconds];
  }

  function printTimeToScreen(interval){
    var formattedInterval = zeroPad(interval);

    hours.textContent = formattedInterval[0];
    minutes.textContent = formattedInterval[1];
    seconds.textContent = formattedInterval[2];
  }

  function logElapsedTime() {
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var elapsed = millisecondsToInterval(elapsedTime);

    printTimeToScreen(elapsed);
  }

  function handleStartClick(){
    startTime = new Date();
    console.log('You clicked the button');
    toggleButton();

    if(timerId){
      window.clearInterval(timerId);
      timerId = 0;
    }else{
      timerId = window.setInterval(logElapsedTime, 1000);
    }
  }

  startButton.addEventListener('click', handleStartClick);

}());


/**
 * Javascript var and data overview
 */
 // var coffeeMug = 'mmmmmm, coffee';  // strings!
 //
 // //console.log(coffeeMug);
 //
 // var title = 'Time to wake up ' + coffeeMug;
 //
 // console.log('title.length:', title.length);
 //
 // var howManyBeans = 64; // numbers
 //
 // //console.log('howManyBeans', howManyBeans);
 //
 // /*
 //   Some operations that can be done
 //   (this is a multi-line comment)
 // */
 //
 // var cupsOfCoffeePossible = 500 / 64;  // divide
 // var sums = 12 + 25;
 // var mutiply = 10 * 10;
 // var subtract = 500 - 64;

 //console.log(sums, mutiply);



/**
 * Functions explained with color mixing machines
 */

// function colorMixer(color1, color2, color3){
//   var mixedColor = '#' + color1 + color2 + color3;
//   console.log("I'm done mixing colors, getting ready to return");
//   return mixedColor;
//   alert('function is done');
// }
//
// var myNewColor = colorMixer('bb', 'dd', 'cc');
// console.log(myNewColor);
