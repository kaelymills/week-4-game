$(document).ready(function(){
	/* console.log( "hello") */

var warrior = "";
var enemy = ""; 
var playerChosen = false;
var playerNotChosen = false;

/* 

var enemyNames = ["luke", "obiwan", "vader", "maul"];
	var healthPoints = [120, 188, 150, 180];
	var counterPoints = [10, 10, 10, 10]
	var attackPoints = [20, 20, 20, 20]
	var images = ["luke.jpg", "obi-wan.jpg", "vader.jpg", "maul.jpg"];

var luke = {
	name: 'Luke Skywalker',
	healthpoints: 120,
	attackpoints: 20,
	counterpoints: 10,
	img: "assets/images/luke.jpg"
	attack: function() {
			hero.health = hero.health - this.power;
		},

var obiwan = {
	name: 'Obi-Wan Kenobi',
	healthpoints: 188,
	attackpoints: 20,
	counterpoints: 10,
	img: "assets/images/obi-wan.jpg"
	attack: function() {
			hero.health = hero.health - this.power;
		},
}

var vader = {
	name: 'Darth Vader',
	healthpoints: 150,
	attackpoints: 20,
	counterpoints: 10,
	img: "assets/images/vader.jpg"
	attack: function() {
			hero.health = hero.health - this.power;
		},
}

var maul = {
	name: 'Darth Maul',
	healthpoints: 180,
	attackpoints: 20
	counterpoints: 10,
	img: "assets/images/darth-maul.jpg"
	attack: function() {
			hero.health = hero.health - this.power;
		},
} 
*/



   // allows user to choose their defender and opponent // 
    $('.player-list').on("click", function(){
        if (!playerChosen) {
        $(".defender-choice").append(this);
        playerChosen = true;
            } else if (!playerNotChosen) {
             $(".opponent-choice").append(this);
             playerNotChosen = true;
             $("#comments").append('LET THE BATTLE BEGIN!')   
            };
    });

    // Setting up function for 'attack' button // 
    $('#attack').on("click", function(){
    	console.log("hello");

    	// Get text/info from 'defender' and 'opponent' text boxes
    	$defender = $(".defender-choice").text();
    	$opponent = $(".opponent-choice").text();

    	/* This may be needed to turn opject string variables into numbers
    	$defender = parseInt($defender);
    	$opponent = parseInt($opponent); */

    	/* if (#attack) = () */




    })


})







