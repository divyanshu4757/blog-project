
const firebaseConfig = {
    apiKey: "AIzaSyAW1raCTkP6cjWrYWO5KMAqhyEgDKxr-wc",
    authDomain: "blog-website-5ca8e.firebaseapp.com",
    projectId: "blog-website-5ca8e",
    storageBucket: "blog-website-5ca8e.appspot.com",
    messagingSenderId: "90565350512",
    appId: "1:90565350512:web:8f3fdc67d52978cfd710b5",
    measurementId: "G-PMSJ6G42VT"
  };
  
    firebase.initializeApp(firebaseConfig);
    
    const auth = firebase.auth();
    var db = firebase.firestore();




    function pass(){
        alert("password dont match")
    }


    function isLoggedIn(){
        console.log('wewe')
    firebase.auth().onAuthStateChanged((user) => {
            if(user){
                if(ab===0){
                location.replace("main.html")
            }
            else{
                location.replace("index.html")
            }
        } 
        else {
           // location.replace("index.html")
            //alert("No Active user Found");
        }
        });}
    


    function signUp() 
    {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var confirmPassword = document.getElementById("confirmPassword");
        var name = document.getElementById("name").value;
        var checkbox=document.getElementById("adminReg") 

        if(password.value!=confirmPassword.value){
            pass();
            return;
        }

            const promise = auth.createUserWithEmailAndPassword(email.value,password.value)
            .then(()=>{
                ab=0;
                db.collection("username").doc("email.value").set({
                    name: name,
                    email:email.value
                })
                .then(() => {
                    const promise1 = auth.signInWithEmailAndPassword(email.value, password.value)
                    .then(() => {
                        ab=0;
                        console.log("Document successfully written!");
                        firebase.auth().onAuthStateChanged((user) => {
                                if(user){
                                    location.replace("main.html")
                                } 
                                else {
                                location.replace("index.html")
                                }
                            });
                        
                    })
                    .catch((error) => {
                        alert(error);
                    });
            promise1.catch((e) => alert(e.message));
                    
                    });
                })
                promise.catch((e) => alert(e.message));
        }

    



    

    // SignIN function
    function signIn() 
    {

        var email = document.getElementById("email");
        var password = document.getElementById("password");

        if(email.value.trim().length===0)
        {
            alert('Email field cannot be empty')
            return 
        }

        const usersRef = db.collection('admin').doc(email.value)

       
        
            const promise = auth.signInWithEmailAndPassword(email.value, password.value)
            .then(() => {
                ab=0;
                console.log("Document successfully written!");
                firebase.auth().onAuthStateChanged((user) => {
                        if(user){
                            location.replace("main.html")
                        } 
                        else {
                        location.replace("index.html")
                        }
                    });
                
            })
            .catch((error) => {
                alert(error);
            });
            
            promise.catch((e) => alert(e.message));
        
    }

    // Active user to homepage
    
    function forgotPass(){
       const email= document.getElementById("email").value;
       firebase.auth().sendPasswordResetEmail(email)
       .then(()=>{
           alert("reset link sent")
       })
    }

