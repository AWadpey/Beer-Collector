$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var beersAdded = 0;
    var beer1= Math.floor(Math.random() * 12) + 1;
    var beer2= Math.floor(Math.random() * 12) + 1;
    var beer3= Math.floor(Math.random() * 12) + 1;
    var beer4= Math.floor(Math.random() * 12) + 1;
    

    var computerNumber = Math.floor(Math.random() * 102) + 19;
    $('.number-generator').text(computerNumber);

   function randomBeerBottles() {  
     beer1= Math.floor(Math.random() * 12) + 1;
     beer2= Math.floor(Math.random() * 12) + 1;
     beer3= Math.floor(Math.random() * 12) + 1;
     beer4= Math.floor(Math.random() * 12) + 1;
    
   }
    function resetGame(){
        if(beersAdded === computerNumber){
            wins++;
            $('.win-count').text(wins);
            $('.gameover').text('Nice! You are not that drunk yet!');
            computerNumber = Math.floor(Math.random() * 102) + 19;
            $('.number-generator').text(computerNumber);
            beersAdded = 0;
            $('.score-tracker').text(beersAdded);
            randomBeerBottles();
        } else if(beersAdded > computerNumber){
            losses++;
            $('.loss-count').html(losses);
            $('.gameover').text('Impending blackout!!! Go hydrate you fool!');
            computerNumber = Math.floor(Math.random() * 102) + 19;
            $('.number-generator').text(computerNumber);
            beersAdded = 0;
            $('.score-tracker').text(beersAdded);
            randomBeerBottles();
        }
    }

    $('.number-generator').text(computerNumber);



$('#one').on('click', function(){
	beersAdded += beer1;
	$('.score-tracker').text(beersAdded);
	resetGame();
});


$('#two').on('click', function(){
	beersAdded += beer2;
	$('.score-tracker').text(beersAdded);
	resetGame();
});


$('#three').on('click', function(){
	beersAdded += beer3;
	$('.score-tracker').text(beersAdded);
	resetGame();
});


$('#four').on('click', function(){
	beersAdded += beer4;
	$('.score-tracker').text(beersAdded);
	resetGame();
});

    
    

});

