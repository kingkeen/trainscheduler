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
		frequency: trainFreq
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



// Create variable to take the string of information from the submit. 

// Load the string of information from the submit to Firebase

// Create code to check if there are firebase data. If not, then listen for Submit.

// If firebase data, then load the database data to for-loop

// use the for-loop to generate the HTML to load the information to the table







// INITIALIZE WHEN DOCUMENT IS READY THE CALL FOR THE SUBMIT BUTTON
// VALIDATE THE SUBMIT BUTTON HAS ALL FIELDS FILLED IN. 

// VALIDATE THE TIME ENTERED IS IN CORRECT FORMAT


