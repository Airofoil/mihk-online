var means = [
	"Alcohol",
	"Amoeba",
	"Arsenic",
	"Arson",
	"Axe",
	"Bamboo Tip",
	"Bat",
	"Belt",
	"Bite And Tear",
	"Blender",
	"Blood Release",
	"Box Cutter",
	"Brick",
	"Bury",
	"Candlestick",
	"Chainsaw",
	"Chemicals",
	"Cleaver",
	"Crutch",
	"Dagger",
	"Dirty Water",
	"Dismember",
	"Drill",
	"Drown",
	"Dumbbell",
	"E-Bike",
	"Electric Baton",
	"Electric Current",
	"Explosives",
	"Folding Chair",
	"Gunpowder",
	"Hammer",
	"Hook",
	"Ice Skates",
	"Illegal Drug",
	"Injection",
	"Kerosene",
	"Kick",
	"Knife And Fork",
	"Lighter",
	"Liquid Drug",
	"Locked Room",
	"Machete",
	"Machine",
	"Mad Dog",
	"Match",
	"Mercury",
	"Metal Chain",
	"Metal Wire",
	"Overdose",
	"Packing Tape",
	"Pesticide",
	"Pill",
	"Pillow",
	"Pistol",
	"Plague",
	"Plastic Bag",
	"Poisonous Gas",
	"Poisonous Needle",
	"Potted Plant",
	"Powder Drug",
	"Punch",
	"Push",
	"Radiation",
	"Razor Blade",
	"Rope",
	"Scarf",
	"Scissors",
	"Sculpture",
	"Smoke",
	"Sniper",
	"Starvation",
	"Steel Tube",
	"Stone",
	"Sulfuric Acid",
	"Surgery",
	"Throat Slit",
	"Towel",
	"Trophy",
	"Trowel",
	"Unarmed",
	"Venomous Scorpion",
	"Venomous Snake",
	"Video Game Console",
	"Virus",
	"Whip",
	"Wine",
	"Wire",
	"Work",
	"Wrench"
];

var evidence = [
	"Air Conditioning",
	"Ants",
	"Antique",
	"Apple",
	"Badge",
	"Bandage",
	"Banknote",
	"Bell",
	"Betting Chips",
	"Blood",
	"Bone",
	"Book",
	"Bracelet",
	"Bread",
	"Briefs",
	"Broom",
	"Bullet",
	"Button",
	"Cake",
	"Calendar",
	"Candy",
	"Carton",
	"Cassette Tape",
	"Cat",
	"Certificate",
	"Chalk",
	"Cigar",
	"Cigarette Ash",
	"Cigarette Butt",
	"Cleaning Cloth",
	"Cockroach",
	"Coffee",
	"Coins",
	"Comics",
	"Computer",
	"Computer Disk",
	"Computer Mouse",
	"Confidential Letter",
	"Cosmetic Mask",
	"Cotton",
	"Cup",
	"Curtains",
	"Dentures",
	"Diamond",
	"Diary",
	"Dice",
	"Dictionary",
	"Dirt",
	"Documents",
	"Dog Fur",
	"Dust",
	"Earrings",
	"Eggs",
	"Electric Circuit",
	"Envelope",
	"Exam Paper",
	"Express Courier",
	"Fan",
	"Fax",
	"Fiber Optics",
	"Fingernails",
	"Flashlight",
	"Flip-Flop",
	"Flute ",
	"Flyer",
	"Food Ingredients",
	"Gear",
	"Gift",
	"Gloves",
	"Glue",
	"Graffiti",
	"Hair",
	"Hairpin",
	"Handcuffs",
	"Hanger",
	"Hat",
	"Headset",
	"Helmet",
	"Herbal Medicine",
	"High Heel",
	"Hourglass",
	"Ice",
	"ID Card",
	"Ink",
	"Insect",
	"Internet Cable",
	"Invitation Card",
	"IOU Note",
	"Iron",
	"IV Bag",
	"Jacket",
	"Jewelry",
	"Juice",
	"Key",
	"Leaf",
	"Leather Bag",
	"Leather Shoe",
	"Lens",
	"Light Bulb",
	"Lipstick",
	"Lock",
	"Lottery Ticket",
	"Love Letter",
	"Luggage",
	"Lunch Box",
	"Magazine",
	"Mahjong Tiles",
	"Map",
	"Mark",
	"Mask",
	"Maze",
	"Menu",
	"Mirror",
	"Mobile Phone",
	"Model",
	"Mosquito",
	"Mosquito Coil",
	"Nail",
	"Name Card",
	"Necklace",
	"Needle And Thread",
	"Newspaper",
	"Note",
	"Notebook",
	"Numbers",
	"Office Supplies",
	"Oil Painting",
	"Oil Stain",
	"Paint",
	"Panties",
	"Peanut",
	"Perfume",
	"Photograph",
	"Plant",
	"Plastic",
	"Playing Cards",
	"Pocket Watch",
	"Postal Stamp",
	"Powder",
	"Prescription",
	"Puppet",
	"Push Pin",
	"Puzzle",
	"Raincoat",
	"Rat",
	"Receipt",
	"Red Wine",
	"Riddle",
	"Ring",
	"Rose",
	"Rubber Stamp",
	"Sack",
	"Safety Pin",
	"Sand",
	"Sawdust",
	"Seasoning",
	"Signature",
	"Skull",
	"Snacks",
	"Soap",
	"Sock",
	"Soft Drink",
	"Speaker",
	"Specimen",
	"Spider",
	"Spinning Top",
	"Sponge",
	"Spring",
	"Steamed Buns",
	"Stockings",
	"Stuffed Toy",
	"Suit",
	"Sunglasses",
	"Surgical Mask",
	"Surveillance Camera",
	"Switch",
	"Syringe",
	"Table Lamp",
	"Take-Out",
	"Tattoo",
	"Tea Leaves",
	"Telephone",
	"Test Tube",
	"Tie",
	"Timber",
	"Tissue",
	"Tool Box",
	"Toothpicks",
	"Toy",
	"Toy Blocks",
	"Tweezers",
	"Umbrella",
	"Uniform",
	"USB Flash Drive",
	"Vegetables",
	"Video Camera",
	"Violin",
	"Wallet",
	"Watch",
	"Wig"
];

var locations = [
	[
		"Living Room",
		"Bedroom",
		"Storeroom",
		"Bathroom",
		"Kitchen",
		"Balcony"
	],
	[
		"Vacation Home",
		"Park",
		"Supermarket",
		"School",
		"Woods",
		"Bank"
	], [
		"Pub",
		"Bookstore",
		"Restaurant",
		"Hotel",
		"Hospital",
		"Building Site"
	], [
		"Playground",
		"Classroom",
		"Dormitory",
		"Cafeteria",
		"Elevator",
		"Toilet"
	]
]

var causeOfDeathTile = [
	"Suffocation",
	"Severe Injury",
	"Loss of Blood",
	"Illness/ Disease",
	"Poisoning",
	"Accident"
];

var sceneTiles = [
	[
	"Motive of Crime",
	"Hatred",
	"Power",
	"Money",
	"Love",
	"Jealousy",
	"Justice"
	],[
	"Weather",
	"Sunny",
	"Stormy",
	"Dry",
	"Humid",
	"Cold",
	"Hot"
	],[
	"Hint on Corpse",
	"Head",
	"Chest",
	"Hand",
	"Leg",
	"Partial",
	"All-over"
	],[
	"General Impression",
	"Common",
	"Creative",
	"Fishy",
	"Cruel",
	"Horrible",
	"Suspenseful"
	],[
	"Corpse Condition",
	"Still Warm",
	"Stiff",
	"Decayed",
	"Incomplete",
	"Intact",
	"Twisted"
	],[
	"Victim's Identity",
	"Child",
	"Young Adult",
	"Middle-Aged",
	"Senior",
	"Male",
	"Female"
	],[
	"Murderer's Personality",
	"Arrogant",
	"Despicable",
	"Furious",
	"Greedy",
	"Forceful",
	"Perverted"
	],[
	"State of The Scene",
	"Bits and Pieces",
	"Ashes",
	"Water Stain",
	"Cracked",
	"Disorderly",
	"Tidy"
	],[
	"Victim's Build",
	"Large",
	"Thin",
	"Tall",
	"Short",
	"Disfigured",
	"Fit"
	],[
	"Victim's Clothes",
	"Neat",
	"Untidy",
	"Elegant",
	"Shabby",
	"Bizarre",
	"Naked"
	],[
	"Evidence Left Behind",
	"Natural",
	"Artistic",
	"Written",
	"Synthetic",
	"Personal",
	"Unrelated"
	],[
	"Victim's Expression",
	"Peaceful",
	"Struggling",
	"Frightened",
	"In Pain",
	"Blank",
	"Angry"
	],[
	"Time of Death",
	"Dawn",
	"Morning",
	"Noon",
	"Afternoon",
	"Evening",
	"Midnight"
	],[
	"Duration of Crime",
	"Instanteous",
	"Brief",
	"Gradual",
	"Prolonged",
	"Few Days",
	"Unclear"
	],[
	"Trace at the Scene",
	"Fingerprint",
	"Footprint",
	"Bruise",
	"Blood Stain",
	"Body Fluid",
	"Scar"
	],[
	"Noticed by Bystander",
	"Sudden sound",
	"Prolonged sound",
	"Smell",
	"Visual",
	"Action",
	"Nothing"
	],[
	"Social Relationship",
	"Relatives",
	"Friends",
	"Colleagues",
	"Employer/ Employee",
	"Lovers",
	"Strangers"
	],[
	"Victim's Occupation",
	"Boss",
	"Professional",
	"Worker",
	"Student",
	"Unemployed",
	"Retired"
	],[
	"In Progress",
	"Entertainment",
	"Relaxation",
	"Assembly",
	"Trading",
	"Visit",
	"Dining"
	],[
	"Sudden Incident",
	"Power Failure",
	"Fire",
	"Conflict",
	"Loss of Valuables",
	"Scream",
	"Nothing"
	],[
	"Day of Crime",
	"Weekday",
	"Weekend",
	"Spring",
	"Summer",
	"Autumn",
	"Winter"
	]
];

var eventTiles = [
	[
	"Countdown",
	"The Forensic Scientist draws 2 scene tiles and substitutes them for any 2 scene tiles in the display.  The game ends after the following PRESENTATION is finished."
	],[
	"Erroneous Information",
	"The Forensic Scientist chooses 1 of the scene tiles on display, and moves its marker to new item on the same tile.  Discard this event tile."
	],[
	"A Good Twist",
	"The player who correctly solved the crime last game immediately receives a chance to do so. This does not count toward their 1 chance this game. If no player is entitled to this advantage, the Forensic Scientist discards this tile and draws another.  Discard this event tile."
	],[
	"A Useful Clue",
	"The Forensic Scientist draws 5 Scene tiles, from which they choose 1 to replace any existing tile in the display. The selected tile cannot be another event. Discard this event tile."
	],[
	"Ruled Out Evidence",
	"Each player must flip over 1 of their own Clue Cards, removing it from consideration. This must be done without discussion. The murderer may not flip over the Key Evidence. (Take this action in counterclockwise order from the Forensic Scientist.) Discard this event tile."
	],[
	"Secret Testimony",
	"All players except the Forensic Scientist close their eyes.  The witness then opens their eyes, points to a scene tile to eliminate, then closes their eyes. All players then open their eyes and the Forensic Scientist discards the indicated tile and replaces it with a random one. Discard this event tile."
	]
];

var sceneTilesCopy;
var eventTilesCopy;
var playerNum;
var clueNum;

$('#seed').val(Math.floor(Math.random() * 1000));

$("#playReset").click(function() {
	if (confirm("Are you sure?")) {
		saveCurNames();
		$("table").empty();
		reset();
	}
});

function reset() {
	Math.seedrandom($('#seed').val());
	playerNum = $("#playerNum option:selected").text() - 1;
	clueNum = $("#clueNum option:selected").text();
	sceneTilesCopy = sceneTiles.slice();
	eventTilesCopy = eventTiles.slice();
	resetSetup();
	eventSetup();
}

// List of player names
var playerNames = []
// Save the current player names
function saveCurNames() {
	playerNames = [];
	var nameBoxes = document.getElementsByName("fname");
	for (var i = 0; i < nameBoxes.length; i++) {
		playerNames.push(nameBoxes[i].value);
	}
}
// Restore as many of the the saved player names as we can
function restoreCurNames() {
	var nameBoxes = document.getElementsByName("fname");

	for (var i = 0; i < nameBoxes.length && i < playerNames.length; i++) {
		nameBoxes[i].value = playerNames[i];
	}
}

function eventSetup(){
	var eventsSetup = $("#permEvents");
	eventsSetup.empty();

	//add hidden cause of DEATH
	var cat = '<div id="cod" class="hideOnLoad"><h4 class="purple">Cause of Death</h4>';
	for (var i = 0; i < causeOfDeathTile.length; i++) cat += '<input type="radio" name="cod" id="' + causeOfDeathTile[i].toLowerCase().replace(/ +/g, '-') + '"><label for="' + causeOfDeathTile[i].toLowerCase().replace(/ +/g, '-') + '">'+ causeOfDeathTile[i] +'</label><br>';
	cat += '</div>';
	eventsSetup.append(cat);

	//add locations
	for (var i = 0; i < locations.length; i++) {
		var cat = '<div id="locations" class="event deleteMe"><h4 class="green">Locations</h4><ul>';
		for (var j = 0; j < locations[i].length; j++) cat += '<li>'+ locations[i][j] +'</li>';
		cat += '</ul>';
		eventsSetup.append(cat + '</div>');
	}
	$("#permEvents div").click(function(){
		$(this).removeClass('deleteMe').unbind();
		$("div").removeClass("hideOnLoad");
		$("#addEvent").removeClass("hideOnLoad");
		$("#permEvents div").each(function(){
			if ($(this).hasClass('deleteMe')){
				$(this).fadeOut(400, function() { $(this).remove() }).fadeOut(400, function() { $(this).remove() });
			}
		});
		addSceneTile();
		addSceneTile();
		addSceneTile();
		addSceneTile();
		$("#permEvents ul").unbind();
	});
}

// Reset click callback functions for li's and .remover's
function resetClickFns() {
	$('div.player li').unbind().click(function() {
		if (this.increasing === undefined) this.increasing = true;
		if (this.alignment  === undefined) this.alignment = 2;

		if (this.increasing) {
			this.innerHTML += '<img src="mag.png" class="mag" style="left:' + this.alignment + 'px;">'; // police-badge-64x.png // filter:contrast(0.5) brightness(0.5);" width="16"
			this.alignment += 16;
		}
		else {
			$(this).children().last().remove();
			this.alignment -= 16;
		}

		if ($(this).children().length === 0) this.increasing = true;
		if ($(this).children().length >= 4) {
			this.increasing = false;
			$(this).addClass('faded');
		}
		else $(this).removeClass('faded');
	});

	$('button#timer').unbind().click(function startTimer() {

		var round = 0;
		round++;



		var countDownDate = Date.now() + 901000;//601000;//481000;

		// Update the count down every 1 second
		var x = setInterval(function () {
			var now = Date.now()

			var distance = countDownDate - now;

			if (distance < 120000) $('#time').css('color','orange');
			if (distance < 60000) $('#time').css('color','red');

			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (minutes < 10) minutes = "0" + minutes;
			if (seconds < 10) seconds = "0" + seconds;

			document.getElementById('time').innerHTML = minutes + ":" + seconds;

			if (distance < (3-round) * 301000) {
				clearInterval(x);

				if (round === 3) alert("Time is up! The Murderer & Accomplice win!");
				else if (confirm("Round " + round + " over. Starting round " + (round + 1))) x();
			}
			// if (distance < 0) {
			// 	clearInterval(x);
			// 	document.getElementById('time').innerHTML = "00:00";

			// 	if (round === 3) alert("Time is up! Murderer wins!");
			// 	else {
			// 		confirm("Round " + round + " over. Starting round " + (round + 1));
			// 		startTimer();
			// 	}
			// }
		}, 500);



		$(this).fadeOut(400, function() { $(this).remove() });



	});
	$('div.player input[type=text]').unbind().blur(function() {
		console.log(this);
		console.log(this.value.length);
		console.log($(this).prev().prev());
		if (this.value.length) $(this).prev().prev().prop('checked', false);
	});

	$('div#locations li').unbind().click(function() {
		$(this).siblings().css('background','none').css('color','inherit')
		$(this).css('background','chartreuse').css('color','black');
	});
	$('div#events li').click(function() {
		$(this).siblings().css('background','none').css('color','inherit')
		$(this).css('background','#b9b1a6').css('color','black');
	});
	$('img.mag').unbind().click(function() {
		$(this).siblings().last().fadeOut(400, function() { $(this).remove() });
	});
	$('.remover').unbind().click(function() {
		$(this).parent().parent().fadeOut(400, function() { $(this).remove() });
	});
}

// Adds a scene (non-event) tile
function addSceneTile(){
	var scenesSetup = $("#events");
	if (sceneTilesCopy.length == 0) {
		return;
	}

	var idx = Math.floor(Math.random() * sceneTilesCopy.length);
	var tempScene = sceneTilesCopy.splice(idx, 1)[0];
	var cat = '<div class="event"><h4' +
	(tempScene[0].length > 12 ? ' style="font-size:' + Math.floor(100 - tempScene[0].length / 1.1) + '%;">' : '>') +
	tempScene[0] + '<span class="remover">×</span></h4><ul>';

	for (var i = 1; i < tempScene.length; i++) cat += '<li>' + tempScene[i] + '</li>';
	cat += '</ul></div>'
	scenesSetup.append(cat);

	resetClickFns();
}

// Adds an event tile
function addEventTile() {
	var eventsSetup = $("#specialEvents");

	var idx = Math.floor(Math.random() * eventTilesCopy.length);
	var tempEvent = eventTilesCopy.splice(idx, 1)[0];
	var cat = '<div class="event"><h4>' + tempEvent[0] + '<span class="remover">×</span></h4><ul>';
	cat += '<li>' + tempEvent[1] + '</li>';
	cat += '</ul></div>';
	eventsSetup.append(cat);

	resetClickFns();
}

// Adds a scene or event tile
// If events are not selected, will always add a scene tile
// Otherwise, randomly adds a scene or event tile based on the number
// of each remaining
function addTile() {
	if ($('#eventsCheck').is(':checked')) {
		// Events are selected, choose randomly between the remaining tiles
		var totalTiles = sceneTilesCopy.length + eventTilesCopy.length;
		var idx = Math.floor(Math.random() * totalTiles);
		if (idx < sceneTilesCopy.length) {
			addSceneTile();
		} else {
			addEventTile();
		}
	} else {
		// Events are not selected. Add a scene tile.
		addSceneTile();
	}
}

function resetSetup() {
	var playerTab = $("#playerTab");
	playerTab.empty();

	//add means/evidence
	var selectedEvidence = [];
	var selectedMeans = [];

	function selectedSetup(arr, data) {
		while (arr.length < playerNum * clueNum) {
			var temp = data[Math.floor(Math.random() * data.length)];
			var dupe = false;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === temp) {
					dupe = true;
				}
			}
			if (!dupe) {
				arr.push(temp);
			}
		};
	};
	selectedSetup(selectedMeans, means);
	selectedSetup(selectedEvidence, evidence);

	//add header for each player
	for (var i = 0; i < playerNum; i++) {
		var cat = '<div class="player">';
		cat += '<p><input type="checkbox" class="badge" id="p' + (i + 1) + '-badge" checked><label class="badge" for="p' + (i + 1) + '-badge" title="Player Guess"></label>';
		cat += '<input type="text" name="fname" style="width:auto" placeholder="Player ' + (i + 1) + '"></p><ul class="weapons">';
		for (var j = 0; j < clueNum; j++) {
			let weapon = selectedMeans[(i * clueNum) + j];
			// weapon.split(' ').forEach(word => {
			// });
			(weapon.match(/\S{10,}/gm) ? console.log(weapon.match(/\S{10,}/gm)) : console.log('No match'))
			cat+= '<li>' +
				// (word.length > 12 ? fontsize = ' style="font-size:' + Math.floor(100 - selectedMeans[(i * clueNum) + j].length / 1.1) + '%;">' : '>') +

			
			
			selectedMeans[(i * clueNum) + j] +'</li>';
		}
		cat+= '</ul><ul class="evidence">';
		for (var j = 0; j < clueNum; j++) {
			let evidence = selectedEvidence[(i * clueNum) + j];
			(evidence.match(/\S{10,}/gm) && evidence.match(/l|i|t/gm).length < 2 ? console.log(evidence.match(/\S{10,}/gm)) : console.log('No match'))

			cat+= '<li>'+ evidence +'</li>';
		}
		cat += '</ul></div>';
		playerTab.append(cat);
	}

	restoreCurNames();

	console.log('evi' + selectedEvidence);
	console.log('means' + selectedMeans);
}

reset();