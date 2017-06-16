// SET VARIABLES
// - ORIGIN CITY
// - DESTINATION CITY
// - START TIME
// - FREQUENTY MINUTES


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAoYwpwB4awwoJv98Nw6q8lGFeNhZTl60M",
    authDomain: "trainscheduler-96a50.firebaseapp.com",
    databaseURL: "https://trainscheduler-96a50.firebaseio.com",
    projectId: "trainscheduler-96a50",
    storageBucket: "trainscheduler-96a50.appspot.com",
    messagingSenderId: "582229155503"
  };
  
firebase.initializeApp(config);
var database = firebase.database();

var minRemainder = 0;

// listens for the train submit button
$("#newSubmission").on("click", function(event) {
	event.preventDefault();

	// Grabs the fields input
	var trainOrigin = $("#train-origin").val().trim();
	var trainDest = $("#train-destination").val().trim();
	var startTime = $("#train-firstTime").val().trim();
	var trainFreq = $("#train-frequency").val().trim();

	// console.log("train-origin: ", trainOrigin);
	// console.log("train-destination: ", trainDest);
	// console.log("train-firstTime: ", startTime);
	// console.log("train-frequency: ", trainFreq);

	var newTrain = {
		origin: trainOrigin,
		trainDestination: trainDest,
		startingTime: startTime,
		freq: trainFreq
	};

	// pushes to firebase the new train input
	database.ref().push(newTrain);

	// console.log(newTrain.origin);
	// console.log(newTrain.trainDestination);
	// console.log(newTrain.startingTime);
	// console.log(newTrain.frequency);

	alert("Train has been added to schedule");

	// Clears the input fields
	$("#train-origin").val("");
	$("#train-destination").val("");
	$("#train-firstTime").val("");
	$("#train-frequency").val("");

});

// adds firebase event to add trains to database and a row of HTML for the entry

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
	
	console.log(childSnapshot.val());

	// stores from variables from database
	var trainOrigin = childSnapshot.val().origin;
	var trainDest = childSnapshot.val().trainDestination;
	var startTime = childSnapshot.val().startingTime;
	var trainFreq = childSnapshot.val().freq;

	console.log("train-origin: ", trainOrigin);
	console.log("train-destination: ", trainDest);
	console.log("train-firstTime: ", startTime);
	console.log("train-frequency: ", trainFreq);

// var now = moment().format('LT');
// var almostNow = now.add(10, 'minutes').format('LT');
// console.log(almostNow);

// console.log("time now : ", now);

// code for the minutes until the next train
	// var differenceTimes = moment().diff(moment.unix(startTime), "minutes");
 //    var tRemainder = moment().diff(moment.unix(startTime), "minutes") % trainFreq;
 //    var tMinutes = trainFreq - tRemainder;

 //    var nextArrival = tRemainder + moment().format('HH:mm');


 	var firstTimeConvert = moment(startTime, "hh:mm").subtract(1, "years");
 	console.log("converted first train time: ", firstTimeConvert);

 	var now = moment();
 	console.log("Current Time: " + moment(now).format("hh:mm"));

 	//difference between times
 	var diffTime = moment().diff(moment(firstTimeConvert), "minutes");
 	console.log("difference in time: ", diffTime);

 	// time till next train - remainder
 	var tMinutes = diffTime % trainFreq;
 	console.log("minutes remainder: ", tMinutes);

 	// minutes until next train
 	var tMinutesTrain = trainFreq - tMinutes;
 	console.log("minutes to next train: ", tMinutesTrain);

 	// next train time
 	var nextArrival1 = moment().add(tMinutesTrain, "minutes");
 	console.log("Arrive time: " + moment(nextArrival1).format("hh:mm"));

 	// Prettyfied time for display
 	var nextArrival = moment(nextArrival1).format("hh:mm");


// Sends the information to the table within the HTML
	$("#train-sched > tbody").append("<tr><td>" + trainOrigin + "</td><td>" + trainDest + "</td><td>" +
	trainFreq + "</td><td>"+ nextArrival + "</td><td>" + tMinutesTrain + "</td></tr>");

}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);

});


// TIME FUNCTION FOR NEXT MINUTES

// function nextArrival (startTime, freq) {
// 	// current time for user
// 	var now = moment().format('HH:mm');
	
// 	// starting train time
// 	var starter = now.split(':').map(function(val) {
// 		return parseInt(val);
// 	});

// 	// current train time
// 	var currArrival = startTime.split(':').map(function(val) {
// 		return parseInt(val);
// 	});

// 	// converts starting train time to minutes
// 	var startTotalMin = starter[0]*60 + starter[1];
// 	// converts current train time to minutes
// 	var currentTotalMin = currArrival[0]*60 + currArrival[1];
// 	// difference in minutes 
// 	minRemainder = (currentTotalMin + freq) % freq;
// 	console.log("minutes to next train: ", minRemainder);

// 	return (minRemainder);

// }


// var minRemaining = 


// console.log("minutes to next train: ", minRemaining)

//FIX ALL THE TIMES HERE WITH MOMENT JS 

	// var conversion = 

	// var diffTime

	// var minRemaining

	// var nextTrain 

	// var nextTrainTime




// Create variable to take the string of information from the submit. 

// Load the string of information from the submit to Firebase

// Create code to check if there are firebase data. If not, then listen for Submit.

// If firebase data, then load the database data to for-loop

// use the for-loop to generate the HTML to load the information to the table







// INITIALIZE WHEN DOCUMENT IS READY THE CALL FOR THE SUBMIT BUTTON
// VALIDATE THE SUBMIT BUTTON HAS ALL FIELDS FILLED IN. 

// VALIDATE THE TIME ENTERED IS IN CORRECT FORMAT


