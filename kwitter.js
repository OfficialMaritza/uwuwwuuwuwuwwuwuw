function addUser()  {

    user_name =  document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);

    window.location = "kwitter_room.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyBx7jRq7IJymidSdNQJ59CbzcFPyfw2naM",
    authDomain: "kwitter-f2b66.firebaseapp.com",
    projectId: "kwitter-f2b66",
    storageBucket: "kwitter-f2b66.appspot.com",
    messagingSenderId: "364999080846",
    appId: "1:364999080846:web:e4ecc6867cc3bc719082df"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
