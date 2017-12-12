
$(document).ready(function() {
	var value = valueReset();
	var crystalOneValue = value[0];
	var crystalTwoValue = value[1];
	var crystalThreeValue = value[2];
	var crystalFourValue = value[3];
	var playerScore = 0
	var randomNumber = value[4];
	var wins = 0;
	var losses = 0;
	var delayReset;

	function generateRandomNumber() {
		return Math.floor(Math.random() * (120 - 19) + 19);
	};

	function generateCrystalValue() {
		return Math.floor(Math.random() * (12 - 1) + 1);
	};

	function valueReset() {
		crystalOneValue = generateCrystalValue();
		crystalTwoValue = generateCrystalValue();
		crystalThreeValue = generateCrystalValue();
		crystalFourValue = generateCrystalValue();
		randomNumber = generateRandomNumber();
		playerScore = 0;

		$("#header, #instruction-container, #wins-container, #losses-container, #random-number-container, #player-score-container").fadeTo("fast", 1.0);
		$("#win, #lose").hide();
		$("#crystals").show();
		$("#random-number").empty().append(randomNumber);
		$("#player-score").empty().append(playerScore);

		return [crystalOneValue, crystalTwoValue, crystalThreeValue, crystalFourValue, randomNumber, playerScore];
	};

	$("#wins").empty().append(wins);
	$("#losses").empty().append(losses);

	$("#crystal-one").click(function() {
		playerScore += crystalOneValue;
		$("#player-score").empty().append(playerScore);

		if(playerScore === randomNumber) {
			wins++;
			$("#crystals").hide();
			$("#win").show();
			$("#header, #instruction-container, #wins-container, #losses-container, #random-number-container, #player-score-container").fadeTo("fast", 0.4);
			delayReset = setTimeout(valueReset, 2000);
		}
		else if(playerScore > randomNumber) {
			losses++;
			$("#crystals").hide();
			$("#lose").show();
			$("#header, #instruction-container, #wins-container, #losses-container, #random-number-container, #player-score-container").fadeTo("fast", 0.4);
			delayReset = setTimeout(valueReset, 2000);
		}

		$("#wins").empty().append(wins);
		$("#losses").empty().append(losses);
	});

	$("#crystal-two").click(function() {
		playerScore += crystalTwoValue;
		$("#player-score").empty().append(playerScore);

		if(playerScore === randomNumber) {
			wins++;
			$("#crystals").hide();
			$("#win").show();
			$("#header, #instruction-container, #wins-container, #losses-container, #random-number-container, #player-score-container").fadeTo("fast", 0.4);
			delayReset = setTimeout(valueReset, 2000);
		}
		else if(playerScore > randomNumber) {
			losses++;
			$("#crystals").hide();
			$("#lose").show();
			$("#header, #instruction-container, #wins-container, #losses-container, #random-number-container, #player-score-container").fadeTo("fast", 0.4);
			delayReset = setTimeout(valueReset, 2000);
		}

		$("#wins").empty().append(wins);
		$("#losses").empty().append(losses);
	});

	$("#crystal-three").click(function() {
		playerScore += crystalThreeValue;
		$("#player-score").empty().append(playerScore);

		if(playerScore === randomNumber) {
			wins++;
			$("#crystals").hide();
			$("#win").show();
			$("#header, #instruction-container, #wins-container, #losses-container, #random-number-container, #player-score-container").fadeTo("fast", 0.4);
			delayReset = setTimeout(valueReset, 2000);
		}
		else if(playerScore > randomNumber) {
			losses++;
			$("#crystals").hide();
			$("#lose").show();
			$("#header, #instruction-container, #wins-container, #losses-container, #random-number-container, #player-score-container").fadeTo("fast", 0.4);
			delayReset = setTimeout(valueReset, 2000);
		}

		$("#wins").empty().append(wins);
		$("#losses").empty().append(losses);
	});

	$("#crystal-four").click(function() {
		playerScore += crystalFourValue;
		$("#player-score").empty().append(playerScore);
		
		if(playerScore === randomNumber) {
			wins++;
			$("#crystals").hide();
			$("#win").show();
			$("#header, #instruction-container, #wins-container, #losses-container, #random-number-container, #player-score-container").fadeTo("fast", 0.4);
			delayReset = setTimeout(valueReset, 2000);
		}
		else if(playerScore > randomNumber) {
			losses++;
			$("#crystals").hide();
			$("#lose").show();
			$("#header, #instruction-container, #wins-container, #losses-container, #random-number-container, #player-score-container").fadeTo("fast", 0.4);
			delayReset = setTimeout(valueReset, 2000);
		}

		$("#wins").empty().append(wins);
		$("#losses").empty().append(losses);

	});
});



