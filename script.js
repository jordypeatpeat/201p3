function geoFindMe() {
  var output = document.getElementById("out");

  if (navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
     var accuracy = position.coords.accuracy;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error, {maximumAge:600000, timeout:50000, enableHighAccuracy: true});
}







      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyA5bBv8X-eUGbjcBrb2dVdOY5BflatEozo",
        authDomain: "looking-glass-mddn243.firebaseapp.com",
        databaseURL: "https://looking-glass-mddn243.firebaseio.com",
        projectId: "looking-glass-mddn243",
        storageBucket: "looking-glass-mddn243.appspot.com",
        messagingSenderId: "706219830950"
      };
      firebase.initializeApp(config);
      console.log(firebase);

          var database = firebase.database();
          var ref = database.ref('users');




          //   ref.on('value', gotData, errData);
         


          // function gotData(data){
          //  console.log('data object', data.val());
          //  var users = data.val();
          //  var keys = Object.keys(users)
          //  console.log(keys);
         //  for (var i = 0; i < keys.length; i ++){
         //    var k = keys[i];

         //    var name = users[k].name;
         //    var pos= users[k].pos;




         //    console.log(users[k].name);
         //    console.log(users[k].pos.lat);
         //    console.log(users[k].pos.lng);
         //    // var name = users[k].name;
         //    // var pos= users[k].score;
         //    // console.log(name, pos.lat);
           

         //  }
         // }


         function errData(err){
           console.log('Error!');
           console.log(err);
         }











      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

          var data = {
            name: "JP",
            score: 28
          }

          ref.push(data);

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          },

          {maximumAge:600000, timeout:50000, enableHighAccuracy: true});
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

         
