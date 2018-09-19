// Initialize Firebase
var config = {
    apiKey: "AIzaSyDoNOCoYuHuH94z1trZJQCarI4tj5uQMS8",
    authDomain: "spokaneclimbingguide.firebaseapp.com",
    databaseURL: "https://spokaneclimbingguide.firebaseio.com",
    projectId: "spokaneclimbingguide",
    storageBucket: "spokaneclimbingguide.appspot.com",
    messagingSenderId: "729666500972"
  };
  firebase.initializeApp(config);


//Reference messages collection

var messagesRef = firebase.database().ref('messages');

// Listen for Form Submit
document.getElementById('developerForm').addEventListener('submit', submitForm);


//submit Form
function submitForm(e){

    e.preventDefault();

    
//get Values

var name = getInputVal('name');
var email = getInputVal('email');
var boulderName = getInputVal('boulderName');
var grade = getInputVal('grade');
var location = getInputVal('location');
var date = getInputVal('date');
var details = getInputVal('details');

//console.log(name);

//Save Message
saveMessage(name, email, boulderName, grade, location, date, details);



// Show alert


}

//Function to get form values

function getInputVal(id){

return document.getElementById(id).value;

}

//Save message to firebase
function saveMessage(name, email, boulderName, grade, location, date, details){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        boulderName: boulderName,
        grade: grade,
        location: location,
        date: date,
        details: details,

    });

}