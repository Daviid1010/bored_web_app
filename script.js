var config = {
        apiKey: "AIzaSyB8j_KBw9G3DyTzsz1mET9PZ8-e1Tp0yOY",
        authDomain: "boredwebapplication.firebaseapp.com",
        databaseURL: "https://boredwebapplication.firebaseio.com",
        projectId: "boredwebapplication",
        storageBucket: "boredwebapplication.appspot.com",
        messagingSenderId: "186723770162"
        };
firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user){
        if(user){
            console.log('User ' + user.email+ 'logged in:');
        }
        else{
            console.log('User not logged in :');
            window.location.href ='index.html';
        }
        
    }
);

function signOut() {
    firebase.auth().signOut().then(function() {
    console.log('User is signed Out');
},  function(error) {
        console.error('Sign Out Error', error);
    });
} 



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}
    

/* code for slider display value*/

function updateTextInput(val) {
    document.getElementById("textInput").value = val;
}

/*Linking the Data on the Search Engine to the Database*/

//Price 
var price = document.getElementById("textInput");

//Event Type
var eventType = document.getElementById("eventSelection");

//City
var city = document.getElementById("citySelection");

$("#submitBtn").click(
    function searchFunction(){
    
        var firebaseRef = firebase.database().ref();
        
    //Link to Speific Node    
        //Price
        var firebasePriceRef = firebase.database().ref().child("Event").child("event_price");
        
        //Event Type
        var firebaseEventRef = firebase.database().ref().child("Event").child("event_type");
        
        //City
        var firebaseCityRef = firebase.database().ref().child("Event").child("city");
        
    //Link to Node Altogether - Doesn't work without this
        
        //Price
        var priceInput = price.value;
        firebasePriceRef.push().set(priceInput);
        
        //Event Type
        var eventInput = eventType.value;
        firebaseEventRef.push().set(eventInput);
        
        //City
        var cityInput = city.value;
        firebaseCityRef.push().set(cityInput);
    }
);



//Kellie's Contact Form

var messagesRef = firebase.database().ref('Messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('userName').value;
  var email = document.getElementById('userEmail').value;
  var message = document.getElementById('userMessage').value;

  saveMessage(name, email, message);

  // Alert
  alert("Message sent!");


  // Clear form
  document.getElementById('contactForm').reset();
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    // company:company,
    email:email,
    // phone:phone,
    message:message
  });
}










