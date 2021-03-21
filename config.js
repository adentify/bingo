var bingo = {
  status      : 'paused', // 'starts as paused - active' 'paused'
  autoDraw    : true, // call numbers automatically...
  autoVelocity: 5, // num secnds betwen calling numbers
  countdown   : false,
  gameSize    : 90,
  balls       : {},
  ballCurrent : false,
  ballLast    : false,
  ballLog     : []
}

for(var i=1; i<=bingo.gameSize; i++){
  bingo.balls[i] = false;
}

if(bingo.autodraw){
  bingo.countdow = bingo.autoVelocity;
}
