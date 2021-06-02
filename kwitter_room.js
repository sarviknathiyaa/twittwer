var firebaseConfig = {
      apiKey: "AIzaSyAuoBTw1dSMejtXnas1cTJ8N4-9Gydc2GA",
      authDomain: "kwitter-2f5de.firebaseapp.com",
      databaseURL: "https://kwitter-2f5de-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f5de",
      storageBucket: "kwitter-2f5de.appspot.com",
      messagingSenderId: "755618441106",
      appId: "1:755618441106:web:e6e9c075124ec9d0a0834b"
};

firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "addingroomname"
      }).
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";
}