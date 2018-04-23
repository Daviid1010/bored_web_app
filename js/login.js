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


  
  var email;
  var password;
  
   $("#login").click(
    function(){
        
        email = document.getElementById("loginEmail").value;
        
        password = document.getElementById("loginPassword").value; 
        
        if(email !="" && password !=""){
            
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
              .then(function() {
                    return firebase.auth().signInWithEmailAndPassword(email, password);
              })
              .catch(function(error) {
               alert(error.message); 
              });
  
        }
    }
);
  
    

$("#createBtn").click(function(){

    var email = document.getElementById("createEmail").value; 
    
    var password = document.getElementById("createPassword").value; 
    
    if(email !="" && password !=""){
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(function() {
                return  firebase.auth().createUserWithEmailAndPassword(email, password);
          })
          .catch(function(error) {
           alert(error.message); 
          });
        
	}
});