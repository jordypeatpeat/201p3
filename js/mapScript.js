var userPos;
var startGeo;
var map;
var infoWindow;

// ADDITIONAL CODE LAYOUT FROM
// https://stackoverflow.com/questions/28998743/creating-a-button-that-shows-my-current-location-using-geolocation



// *************  GOOGLE MAPS SETUP  **************
function initMap() {

    // Settings for the map
    var mapOptions = {
        center: new google.maps.LatLng(-41.295077, 174.775808),
        zoom: 5,
        styles: [
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape",
                    "stylers": [
                      {
                        "lightness": -5
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.man_made",
                    "stylers": [
                      {
                        "lightness": -10
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural",
                    "stylers": [
                      {
                        "lightness": -15
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.business",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "stylers": [
                      {
                        "lightness": 100
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      },
                      {
                        "lightness": -45
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      },
                      {
                        "lightness": 100
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "stylers": [
                      {
                        "lightness": -35
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      },
                      {
                        "lightness": -40
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                ]
    };
    //  Side Window popup (hide on start)
    $("#markerSide").hide();
    // Create map
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    infoWindow = new google.maps.InfoWindow;

    // Find the DIV to hold the control and call the constructor passing in this DIV
    var geolocationDiv = document.getElementById('submitButton');
    var geolocationControl = new GeolocationControl(geolocationDiv, map);

    //map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(geolocationDiv);
}

function GeolocationControl(controlDiv, map) {


      // Set CSS for the control button
    var controlUI = document.getElementById('submitButton');


    // Setup the click event listeners to geolocate user
    google.maps.event.addDomListener(controlUI, 'click', geolocate);
}

// ***********************************************









// *************  FIREBASE SETUP  *****************
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

  ref.on('value', gotData, errData);
   
         function gotData(data){
          console.log('data object', data.val());
          var users = data.val();
          var keys = Object.keys(users)
          console.log(keys);
          for (var i = 0; i < keys.length; i ++){
            var k = keys[i];

            var name = users[k].name;
            var pos= users[k].pos;

            userPos= {lat: pos.lat, lng: pos.lng};

            var userMarker = new google.maps.Marker({
              position: userPos,
              map: map
            });


            //Bool to check whether side box is visible
            var showSide = false;

            // On marker click, zoom, show side box
              userMarker.addListener('click', function() {
                   map.setZoom(16);
                   map.setCenter(userMarker.getPosition());
                
                  if ($("#markerSide").is(":hidden")) {
                    $("#markerSide").slideToggle(200);
                    showSide = false;
                  }
              });

              // On map click, if box is visible, hide
              map.addListener('click', function() {
                   if ($("#markerSide").is(":visible")) {
                    $("#markerSide").hide();
                    showSide = true;
                   }
                 });


            console.log(users[k].name);
            //console.log(users[k].pos.lat);
            //console.log(users[k].pos.lng);
            console.log(userPos);
            // var name = users[k].name;
            // console.log(name, pos.lat);
           

          }
         }

         function errData(err){
          console.log('Error!');
          console.log(err);
         }

// *************************************************





// ***************  TRY HTML5 GEOLOCATION  *************
function geolocate() {
  
  // If 'mobile' is selected, use geolocation to place marker
  var radioValue = document.getElementById("mobile").checked;
  console.log(radioValue);
  if (radioValue){

    // Close the upload section before locating
    $("#upload").slideToggle("slow");
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log('pos', pos);

        var data =  {
            name:"Someone's name",
            pos : pos
         }
        ref.push(data);



        infoWindow.setPosition(pos);
        infoWindow.setContent('location found');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
// *****************************************************


