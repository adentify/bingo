function callNum(){
//  var audio = new Audio("https://adtools.telegraph.co.uk/bingo/audio/"+num+".mp3" ) ;
//  audio.play();
  var tmp = {
    thisNum : pickNum()
  }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function init(){
  // update number of balls called
  document.getElementById('ballsCalled').innerHTML = bingo.called.length;
  // update number of balls called
  document.getElementById('ballsLeft').innerHTML = bingo.called.length;
  // update number of balls to be called
  document.getElementById('gameSize').innerHTML = bingo.gameSize;
}





var bingo = {
	uncalled  : [],
	called    : [],
	gameSize  : 90,
	currBall  : false,
	lastBall  : false
}


// setup the base numbers to be called
for (var i =1; i<=bingo.gameSize; i++){
  bingo.uncalled.push(i);
}


// loop balls
// get random num 1-ballCount
// check to see if it's bee called
// if not then this is the CURRENT CALL ball/number
// display number, and audio
// mark number uncalled as false


function pickNum(){
  // make sure we've not run out of numbrs
  if(bingo.uncalled.length>0){

    // generate random number based on length of the bingo.uncalled array
    var picked = Math.floor(Math.random() * bingo.uncalled.length);

    // get the value of this element
    bingo.currBall = bingo.uncalled[picked];

    // and add to the called array
    bingo.called.push(bingo.currBall);     

    // display the called number
    console.log('bingo.currBall -> '+bingo.currBall);

    // now remove this ball from the uncalled array
    bingo.uncalled.remove(bingo.currBall);
  
    // display the output
    updateCurrentNum(bingo.currBall);

    // audio announce number - https://dev.to/asaoluelijah/text-to-speech-in-3-lines-of-javascript-b8h
    msg      = new SpeechSynthesisUtterance();
    msg.text = bingo.currBall;
    window.speechSynthesis.speak(msg);  
    console.log('BINGO: Audio....');
  } else {
    console.log('NO BALLS LEFT TO CALL');    
  }

}

function updateCurrentNum(num){
  // if number ia <9 whe need to add a psace to the front of it to pad it out
  var val = num;
  if(num<=9) val = "&nbsp;&nbsp;"+num;

  // update the current ball called DIV
  document.getElementById('currentNumber').innerHTML = val;
  var newBall = '<span class="numberCircleSmall">'+val+'</span> ';
  // append the current called ball to the list of called balls.
  document.getElementById('callLog').insertAdjacentHTML("afterbegin", newBall);

  // update number of balls called
  document.getElementById('ballsCalled').innerHTML = bingo.called.length;
  // update number of balls to be called
  document.getElementById('ballsLeft').innerHTML = bingo.uncalled.length;
  // display game over image if this is the last number called
  if(bingo.called.length == 0){
    document.getElementById('gameStat').innerHTML = "<img src=\"img/gameover.jpg\" height=\"35\">";
  }


  // update number grid
  document.getElementById('cell_'+num).style.backgroundColor = '#e6b6b1';

}


function drawNumberGrid(){
	// draws a grid of numbers
	// 90 = 15 cols 6 rows
	var tmp = {
      rows     : 6,
      cols     : 15,
      cellNum  : 1
	};

    var output = "<table border=\"1\" cellpadding=\"5\" cellspacing=\"0\" width=\"100%\">";

    // rows
    for(var i=0;i<tmp.rows;i++){
      output += "<tr>";
      for(var n=0;n<tmp.cols;n++){
        output += "<td id=\"cell_"+tmp.cellNum+"\" align=\"center\" valign=\"middle\">"+tmp.cellNum+"</td>";
        tmp.cellNum++;
      }
      output += "</tr>";
    }

// cols

     output += "</table>";
     return output;
}

///////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', (event) => {
    init();
    document.getElementById('numberGrid').innerHTML = drawNumberGrid();
    console.log('DOM fully loaded and parsed');
});




