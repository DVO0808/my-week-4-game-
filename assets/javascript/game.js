$(document).ready(function() {

$("#attack").hide();

function audioPlay() {
                var audio = document.getElementById("player");
                if (audio.paused) {
                    audio.play();
                }else{
                    audio.pause();
                }

            }
            console.log("about to play Pokemon song");

            audioPlay();
/*I need an object for each character with a health point, attack points, and counter attack points for each as well as a function for what should happen when they are in different areas of the page*/
var hero;
var heroID;
var heroStatus;
var heroAttack;

var enemy;
var enemyID;
var enemyStatus;
var enemyAttack;

var enemiesToBattle;

var attack = 0;
var wins = 0;
var loss = 0;
var enemiesDefeated = 0;



var character =[{

	id: "pika",
	name: "Pikachu",
	healthPoints: 100,
	attack: 10,
	
}, {

	id: "char",
	name: "Charizard", 
	healthPoints: 150,
	attack: 20,
	
},{

	id: "mew",
	name: "Mew", 
	healthPoints: 200,
	attack: 25,
}, {

	id: "mew2",
	name: "MewTwo",
	healthPoints: 250,
	attack: 30,
}]




//I need a click function for when the first character is clicked so that it moves to the your character area and everything else to the enemies available area and then moves the second character clicked to the Defender area 

function startGame(){

for (var i = 0; i < character.length; i++){
	console.log(character);
	console.log(character.length);
	var currentCharacter = character[i];
	console.log(currentCharacter);
	console.log(currentCharacter.length);

	var newDiv = $("<div class='pokeChar active' id ='" + currentCharacter.id + "'></div>").appendTo("#characters");
	$("<div class='charName'></div>").html(currentCharacter.name).appendTo(newDiv);
	$("<div class='hP' id ='" + currentCharacter.name + "'></div>").html("HealthPoint: " + currentCharacter.healthPoints).appendTo(newDiv);
}
 
	$("#userMessage").html("Choose a character");
	$("#eTB").html("Enemies To Battle");
}

startGame();



$('.pokeChar').click(function(){
	if (hero && enemy){
	
	 return;
	}

	if (hero){
		enemyID = this.id;
		console.log(enemyID);
		enemy = $(this).appendTo("#defend");
		$(this).removeClass("active");
		$("#eTB").html("Enemies Still To Battle");
		$("#userMessage").html("Let the battle begin!");
		$("#attack").show();
		audioPlay();
		
		
	}else {
		heroID = this.id;
		console.log(heroID);
		hero = $(this).appendTo("#yourChar");
		$(this).removeClass("active");
		enemiesToBattle = $(".active").appendTo("#enemiesTB");
		$("#userMessage").html("Choose an Opponent from Enemies To Battle");
		
	}
	
})

$('.attackButton').click(function(){

	attack++;
	console.log(attack);

	var enemyObject = getCharacterById(enemy.attr('id'));
	var heroObject = getCharacterById(hero.attr('id'));

	console.log(enemyObject);
	console.log(heroObject);


	enemyObject.attack  = enemyObject.attack;
	heroObject.attack  =  heroObject.attack * (attack / 2);

	enemyObject.healthPoints  = enemyObject.healthPoints - heroObject.attack;
	heroObject.healthPoints  =  heroObject.healthPoints - enemyObject.attack;
	console.log(enemyObject.healthPoints);
	console.log(heroObject.healthPoints);


	if(enemyObject.healthPoints <= 0){
		wins++;
		enemiesDefeated++;
		console.log("number of wins: " + wins);
		console.log("number of enemies defeated: " + enemiesDefeated);
		$("#enemiesD").html("Enemies Defeated Area");
		$('#' + enemyID).appendTo("#enemiesD");

	}

	if(heroObject.healthPoints <= 0){
		loss++;
		console.log("you have lost");

	}


})

function getCharacterById(id){

for (var i = 0; i < character.length; i++){
		if(id === character[i].id){
		
		return character[i];

		}

	}

}

/*	enemyStatus -= heroAttack;
	console.log("new enemy status is: " + enemyStatus);
	console.log('heroStatus before subtraction', heroStatus);
	heroStatus = heroStatus - enemyAttack;
	// console.log('enemyAttack:', enemyAttack);
	console.log("new hero status is: " + heroStatus);

	if(enemyObject.healthPoints === 0){
		wins++;
		enemiesDefeated++;
		console.log("number of wins: " + wins);
		console.log("number of enemies defeated: " + enemiesDefeated);
		$("#enemiesD").html("Enemies Defeated Area");
		$('#' + enemyID).appendTo("#enemiesD");

	}

	if(heroObject.healthPoints === 0){
		loss++;
		console.log("you have lost");

	}


*/



})