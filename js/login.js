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
        if(user){//If user is logged in
            window.location.href ='main.html';
        }
    }
); 

// firebase.auth().onAuthStateChanged(function(user){
//         if(user){
//             console.log('User Logged in :' + user );
//             var data = localStorage.setItem('currentUser', user);
//             //window.location.href ='main.html';
//         }
//         else{
//             console.log('User Not Logged in');
//         }
        
//     }
// );

// var email;

// var password;

// /*Log in to Account*/
//     function signIn(){
        
        
//         email = document.getElementById("loginEmail").value;
//         password = document.getElementById("loginPassword").value;
        
//         if (email != "" && password != "") {

//             firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//                 // Handle Errors here.
// 				alert(error.message);
//         });
        
//         // if(email !="" && password !=""){
//         //     firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//         //       // Handle Errors here.
              
//         //       alert(error.message);
              
//         //     //var errorCode = error.code;
//         //     //var errorMessage = error.message;
//         //      /*if (errorCode === 'auth/wrong-password') {
//         //         //$("#loginError").show().text(error.message);
                
//         //      }*/
//         //     });
//         // }
//         }
//     };
    
//     $("#login").click(
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
  
  var email;
  var password;
  
   $("#login").click(
    function(){
        
        //var username = $("#loginUsername").val();
        
        email = document.getElementById("loginEmail").value;
        
        password = document.getElementById("loginPassword").value; 
        
        if(email !="" && password !=""){
            
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
              .then(function() {
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                return firebase.auth().signInWithEmailAndPassword(email, password);
              })
              .catch(function(error) {
               alert(error.message); 
              });
  
            // firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            //   // Handle Errors here.
              
            //     alert(error.message); 
                
            // });
        }
    }
);
  
    

$("#createBtn").click(function(){

    var email = document.getElementById("createEmail").value; //var email = $("#createEmail").val();
    
    var password = document.getElementById("createPassword").value; //var password = $("#createPassword").val();
    
    if(email !="" && password !=""){
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(function() {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return  firebase.auth().createUserWithEmailAndPassword(email, password);
          })
          .catch(function(error) {
           alert(error.message); 
          });
        
        
//          firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//              // Handle Errors here.
//              alert(error.message);
             
//             /*function changeCreateAccountState() {
//                     document.getElementById("createMessage").innerHTML = "You have created an Account - Sign in!";
//             }*/
 
// 		 });
	}
});
