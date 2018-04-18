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
            // localStorage.setItem("currentUser", user);
            // console.log("Hi"+localStorage.currentUser);
        }
        else{
            console.log('User not logged in :');
            //send user to login page
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
    
    
    
    
    
  /*  if (firebase.auth().currentUser) {
        console.log('User Logged in :' + user );
        window.location.href ='main.html';
    } 
    else{
        console.log('User Not Logged in');
        //window.location.href = 'index.html';
    }*/


/*firebase.auth().onAuthStateChanged(function(user){
        if(user){
            console.log('User Logged in :' + user );
            window.location.href ='main.html';
        }
        else{
            console.log('User Not Logged in');
        }
        
    }
);*/

// /*Log in to Account*/
// $("#login").click(
//     function(){
        
//         //var username = $("#loginUsername").val();
        
//         var email = document.getElementById("loginEmail").value;//$("#loginEmail").val();
        
//         var password = document.getElementById("loginPassword").value; //$("loginPassword").val();
        
//         if(email !="" && password !=""){
//             firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//               // Handle Errors here.
              
//             var errorCode = error.code;
//             var errorMessage = error.message;
//              if (errorCode === 'auth/wrong-password') {
              
//                 $("#loginError").show().text(error.message);
//              }
//              else{
//                  window.location.href = "/home.html";
//                 $("#login").hide();
//                 $("#logout").show();
//              }
                
//             });
//         }
//     }
// );

// $("#createBtn").click(
//     function(){

//         var email = document.getElementById("createEmail").value; //var email = $("#createEmail").val();
        
//         var password = document.getElementById("createPassword").value; //var password = $("#createPassword").val();
        
//         if(email !="" && password !=""){
            
            
//              firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//                  // Handle Errors here.
                 
//                 function changeCreateAccountState() {
//                         document.getElementById("createMessage").innerHTML = "You have created an Account - Sign in!";
//                 }
      
//                 $("#createError").show().text(error.message);
//                 //document.getElementById("createError").show().text(error.message);
//               //$("#createError").show().text(error.message);
//               // ...
// 			 });
// 		}
// 	});
    

/*Logout of Account*/



/*$("#logout").click(
    function(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
    });*/

/*firebase.auth().onAuthStateChanged(function(user){
        if(user){
           console.log('User Logged in :' + user );
            window.location.href ='main.html';
        }
        else{
            console.log('User Not Logged in');
            //window.location.href = 'index.html';
        }
        
    }
);*/

/*firebase.auth().onAuthStateChanged(user => {

    if(user){
        console.log('user is signed in', user);
        //if(window.location.href != "/"){
            //window.location='/';
        //}
    }
    else{
        console.log('user is NOT signed in');
    }

});*/

/*logout.addEventListener('click', e => {
    firebase.auth().signOut();
});*/

/*document.getElementById("logout").addEventListener("click", function(){
    firebase.auth().signOut();
});*/








//document.getElementById("signOutBtn").addEventListener("click", mySignOut);

/*function mySignOut(){
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    }
}*/



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

// firebase.auth().onAuthStateChanged(function(user){
//         if(user){
//             var data = localStorage.setItem('currentUser', user);
//             console.log('User Logged in :' + user );
//             //window.location.href ='main.html';
//         }
//         else{
//             console.log('User Not Logged in');
//         }
        
//     }
// );

// var user = firebase.auth().onAuthStateChanged;

// if(user){
//     console.log('User Logged in :' + user );
//     sessionStorage.setItem("currentUser", user);
//     console.log("Hi"+localStorage.currentUser);
// }
//  else{
//         console.log('User Not Logged in' +user);
//     }




//  window.onload = function storage(){
//      //console.log("Hi"+localStorage.currentUser);
//     //var data = localStorage.getItem('currentUser');
// }


/*Make sure to set function to change then string in the form messages and change string of the "Login" in the navbar* - Lauren*/


//Kellie's Contact Form


// document.getElementById("contactForm").addEventListener("submit", submitForm);


// function submitForm(){
    
//     // var name = getInputVal("name");
//     // var email = getInputVal("email");
//     // var message = getInputVal("message");
    
//     var name = document.getElementById("userName").value;
//     var email = document.getElementById("userEmail").value;
//     var message = document.getElementById("userMessage").value;
    
    
//     // console.log(name, email, message);
//     saveMessage(name, email, message);

//     //Refernece messages collection
//     var messagesRef = firebase.database().ref("Messages");
    
    
//     //Save message to firebase
//     function saveMessage(name, email, message){
//         var newMessageRef = messagesRef.push();
//         newMessageRef.set({
//             name: name,
//             email: email,
//             message:message
//         });
//     }
// }




// function submitForm(){
    
//     // //Get Values
//     var name = getInputVal('name');
//     var email = getInputVal('email');
//     var message = getInputVal('message');
    
//     console.log(userName);
    
// }

//saveMessage(name, email, message);

// function getInputVal(id){
//     return document.getElementById(id).value;
// }

// //Refernece messages collection
// var messagesRef = firebase.database().ref("Messages");


// //Save message to firebase
// function saveMessage(name, email, message){
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         name: name,
//         email: email,
//         message:message
//     });
// }


// function updateTextInput(val) {
//           document.getElementById('textInput').value=val; 
// }










