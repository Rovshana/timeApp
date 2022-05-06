// Define variables which hold the time values..
let seconds = 0;
let minutes = 0;
let hours = 0;

// Defineing variables which holds displayValues
 let displaySeconds = 0;
 let displayMinutes = 0;
 let displayHours = 0;

 // defining variables to setInterval function
 let interval = null;
 let clock = 'stopped'


// stopwatch function(increamenting next values..)
function stopWatch(){
    seconds ++;
    // when next value will increment!
    if( seconds /60 === 1){
        seconds = 0;
        minutes ++;

if(minutes / 60 === 1){
    minutes = 0;
    hours ++;
}
    } 

    ///  for just  outlook, if hour or min or sec is  smaller than ten, display like this 0 3;
    if(seconds < 10){ 
        displaySeconds = '0' + seconds.toString();

    } else{
        displaySeconds = seconds;
    } if(minutes < 10){
        displayMinutes = '0' +minutes.toString()
    } else {
        displayMinutes = minutes
    } if(hours < 10){
        displayMinutes = '0' + hours.toString();

    }
document.getElementById("display").innerHTML = `${displayHours} : ${displayMinutes} : ${displaySeconds}`
   // $('#display').text(`${hours} ":" ${minutes} ":" ${seconds}`)
}
//ssetInterval(stopWatch, 1000);

/// 
function startAndStop (){
    if(clock === 'stopped'){
        interval = setInterval(stopWatch, 1000);
document.getElementById('startStop').innerHTML = 'stop';
clock = 'started'
    } else{
        clearInterval(interval);
        clock = 'stopped'
    }

}

// reset 

function reset (){
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector('#display').innerHTML = "0:0:0";
    document.querySelector('#startStop').innerHtml = 'start';
}