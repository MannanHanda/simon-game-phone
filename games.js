var buttonColors=["red", "blue", "green", "yellow"]; 
var gamePattern=[]; 
var userClickedPattern=[];
var level=0;
var start=prompt('Enter start to commence the game-');

if(start='started'){
    $('#level-title').text('Level '+level);
    nextSequence();
}
else{
    var start=prompt('Enter start to commence the game-');
}

$('.btn').click(function(){
    userChosenColor=$(this).attr('id');
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});





function nextSequence(){
    userClickedPattern=[];  
    level++
    $('#level-title').text('Level '+level); 
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);   
    $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}


function playSound(name){
    var audio=new Audio('sounds/'+name+'.mp3');
    audio.play();
}

function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');
    setTimeout(function(){
        $('#'+currentColor).removeClass('pressed')
    },500);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log('Success')
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        $('#level-title').text('Game Over! Refresh to start again');
        console.log('Wrong');
        var wrongAudio=new Audio('sounds/wrong.mp3');
        wrongAudio.play();
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over'); 
        },200);
        startOver();
    }
}
function startOver(){
        gamePattern=[];
        level=0;
}







