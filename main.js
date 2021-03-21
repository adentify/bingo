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
  uncalled       : [],
  called         : [],
  gameSize       : 90,
  currBall       : false,
  lastBall       : false,
  currBallAudio  : [
    'NOT USED',
    'Kellys eye, number 1',
    'One little duck, number 2',
    'On its own, number 3',
    'On its own, number 4',
    'On its own, number 5',
    'On its own, number 6',
    'On its own, number 7',
    'On its own, number 8',
    'On its own, number 9',
    'Number 10, Maggies den, ',
    'Legs 11',
    'One dozen, 12',
    'Unlucky for some, 13',
    'One and four, 14',
    'One and five, 15',
    'One and six, 16',
    'Oneand seven, 17',
    'One and eight, 18',
    'One and nine, 19',
    'Two Oh, blind 20',
    'Key of the door, 21',
    'Two little ducks, 22',
    'Two and three, 23',
    'Two and four, 24',
    'Two and five, 25',
    'Two and six, 26',
    'Two and seven, 27',
    'Two and eight, 28',
    'Two and nine, 29',
    'Three Oh, blind 30',
    'Three and one, 31',
    'Three and two, 32',
    'All the threes, 33',
    'Three and four, 34',
    'Three and five, 35',
    'Three and six, 36',
    'Three and seven, 37',
    'Three and eight, 38',
    'Three and nine, 39',
    'Four Oh, blind 40',
    'Four and one, 41',
    'Four and two, 42',
    'Four and three, 43',
    'All the fours, 44',
    'Four and five, 45',
    'Four and six, 46',
    'Four and seven, 47',
    'Four and eight, 48',
    'Four and nine, 49',
    'Five Oh, Blind 50',
    'Five and one, 51',
    'Five and two, 52',
    'Five and three, 53',
    'Five and four, 54',
    'All the fives, 55',
    'Five and six, 56',
    'Five and seven, 57',
    'Five and eight, 58',
    'Five and nine, 59',
    'Six Oh,Blind 60',
    'Six and one, 61',
    'Six and two, 62',
    'Six and three, 63',
    'Six and four, 64',
    'Six and five, 65',
    'All the sixes, 66',
    'Six and seven, 67',
    'Six and eight, 68',
    'Six and nine, 69',
    'Seven Oh, blind 70',
    'Seven and one, 71',
    'Seven and two, 72',
    'Seven and three, 73',
    'Seven and four, 74',
    'Seven and five, 75',
    'Seven and six, 76',
    'All the sevens, 77',
    'Seven and eight, 78',
    'Seven and nine, 79',
    'Eight Oh, blind 80',
    'Eight and one, 81',
    'Eight and two, 82',
    'Eight and three, 83',
    'Eight and four, 84',
    'Eight and five, 85',
    'Eight and six, 86',
    'Eight and seven, 87',
    'Two fat ladies, 88',
    'Eight and nine, 89',
    'Nine Oh, blind 90',
  ]
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
    msg.text = bingo.currBallAudio[bingo.currBall];
    window.speechSynthesis.speak(msg);  
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




