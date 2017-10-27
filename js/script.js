$(document).ready(function(){


        // SCROLL REVEAL
        window.sr = ScrollReveal({ reset: true });
        sr.reveal('.revealA, .revealB, .revealC, .revealD, .revealE', { origin: 'left',  duration: 1200, scale: 0.8});
        sr.reveal('#revealA_1, #revealB_1, #revealC_1, #revealD_1, #revealD_2, #revealE_1', { origin: 'right',  duration: 1000 });

        // SLIDE SHOW/HIDE
        $("#profile").hide(); // This hides said divs on site loading.
        $("#stats").hide();
        $("#upload").hide();
        $("#profile2").hide();
        $("#stream").hide();

        $("#gotoPro, #gotoPro2").click(function() {
            $("#profile2").slideToggle(200);
            $("#markerSide").hide();


            if ($("#stats").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#stats").slideToggle("slow");
            }

            if ($("#upload").is(":visible")) {
                $("#upload").slideToggle("slow");
            }
            
            if ($("#profile").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile").slideToggle("slow");
            }

            if ($("#stream").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#stream").hide();
            }  
        });

        $("#streamButton").click(function() {
            $("#stream").slideToggle(200);
            $("#markerSide").hide();


            if ($("#stats").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#stats").slideToggle("slow");
            }

            if ($("#upload").is(":visible")) {
                $("#upload").slideToggle("slow");
            }
            
            if ($("#profile").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile").slideToggle("slow");
            }   

            if ($("#profile2").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile2").slideToggle("slow");
            }  
        });


        $("#button_profile").click(function() { //This checks when the profile button is pressed, if there's a div to close

            $("#profile").slideToggle(200);
            $("#markerSide").hide();


            if ($("#stats").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#stats").slideToggle("slow");
            }

            if ($("#upload").is(":visible")) {
                $("#upload").slideToggle("slow");
            }

            if ($("#profile2").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile2").slideToggle("slow");
            }

            if ($("#stream").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#stream").slideToggle("slow");
            }                   
        });

        $("#button_stats").click(function() { //This checks when the profile button is pressed, if there's a div to close

            $("#stats").slideToggle(200);
            $("#markerSide").hide();


            if ($("#profile").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile").slideToggle("slow");
            }

            if ($("#upload").is(":visible")) {
                $("#upload").slideToggle("slow");
            }

            if ($("#profile2").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile2").slideToggle("slow");
            }

            if ($("#stream").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#stream").slideToggle("slow");
            }              
        });


        // PROFILE 'STATS' BUTTON CLICKED, CLOSE PROFILE AND OPEN STATS
        $("#pbutton_stats").click(function() { //This checks when the profile stats button is pressed, if there's a div to close
            $("#profile").hide();
            $("#stats").slideToggle(200);
        });

        $("#exitP2").click(function() { //This checks when the profile stats button is pressed, if there's a div to close
            $("#profile2").slideToggle(200);
        });

        $("#exitS").click(function() { //This checks when the profile stats button is pressed, if there's a div to close
            $("#stream").slideToggle(200);
        });

        $("#exitStats").click(function() { //This checks when the profile stats button is pressed, if there's a div to close
            $("#stats").slideToggle(200);
        });

        $("#exitProfile").click(function() { //This checks when the profile stats button is pressed, if there's a div to close
            $("#profile").slideToggle(200);
        });

        $("#exitUpload").click(function() { //This checks when the profile stats button is pressed, if there's a div to close
            $("#upload").slideToggle(200);
        });

        $("#button_upload").click(function() { //This checks when the profile button is pressed, if there's a div to close

            $("#upload").slideToggle(200);
            $("#markerSide").hide();

            if ($("#profile").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile").slideToggle("slow");
            }

            if ($("#stats").is(":visible")) {
                $("#stats").slideToggle("slow");
            }

            if ($("#profile2").is(":visible")) {  // i.e. #show is a div that could be visible
                $("#profile2").slideToggle("slow");
            }                 
        });

});

// SHOW/HIDE FORM BASED ON RADIO
//https://stackoverflow.com/questions/2777139/how-to-use-jquery-to-show-hide-divs-based-on-radio-button-selection
$(document).on( "change", "input[name=options]", function() {

        $("#showStatic1").slideToggle(500);
        $("#showStatic2").slideToggle(500);

});

//CHANGE BACKGROUND-MAP IMAGE
$(document).on( "change", "input[name=heat]", function() {

        if(document.getElementById('switch-4').checked) {
            $('.mapLayout').css({ 'background-image' : 'url(images/mapHeat.png)' });
        } else {
            $('.mapLayout').css({ 'background-image' : 'url(images/mapGrey.png)' });
        }

});


// CHANGE HEADER OPACITY WITH OVERLAY
// https://stackoverflow.com/questions/11962962/overriding-important-with-css-or-jquery
$('#button_profile, #exitProfile').click(function(){
        if ($("#profile").is(":visible")) {          
            // replace css with '!important' and timer of 200 millis
            setTimeout(function(){
                $( '.mdl-layout__header' ).each(function () {
                        this.style.setProperty( 'background-color', 'rgba(0,0,0,0)', 'important' );
                });
            }, 200);
        }
        else {
            $( '.mdl-layout__header' ).each(function () {
                this.style.setProperty( 'background-color', 'rgba(0,0,0,0.75)', 'important' );
            });           
        }
});
$('#button_stats, #exitStats').click(function(){
        if ($("#stats").is(":visible")) {          
            // replace css with '!important' and timer of 200 millis
            setTimeout(function(){
                $( '.mdl-layout__header' ).each(function () {
                        this.style.setProperty( 'background-color', 'rgba(0,0,0,0)', 'important' );
                });
            }, 200);
        }
        else {
            $( '.mdl-layout__header' ).each(function () {
                this.style.setProperty( 'background-color', 'rgba(0,0,0,0.75)', 'important' );
            });           
        }
});
$('#button_upload, #exitUpload').click(function(){
        if ($("#upload").is(":visible")) {          
            // replace css with '!important' and timer of 200 millis
            setTimeout(function(){
                $( '.mdl-layout__header' ).each(function () {
                        this.style.setProperty( 'background-color', 'rgba(0,0,0,0)', 'important' );
                });
            }, 200);
        }
        else {
            $( '.mdl-layout__header' ).each(function () {
                this.style.setProperty( 'background-color', 'rgba(0,0,0,0.75)', 'important' );
            });           
        }
});

$('#gotoPro, #exitP2').click(function(){
        if ($("#profile2").is(":visible")) {          
            // replace css with '!important' and timer of 200 millis
            setTimeout(function(){
                $( '.mdl-layout__header' ).each(function () {
                        this.style.setProperty( 'background-color', 'rgba(0,0,0,0)', 'important' );
                });
            }, 200);
        }
        else {
            $( '.mdl-layout__header' ).each(function () {
                this.style.setProperty( 'background-color', 'rgba(0,0,0,0.75)', 'important' );
            });           
        }
});

$('#streamButton, #exitS').click(function(){
        if ($("#stream").is(":visible")) {          
            // replace css with '!important' and timer of 200 millis
            setTimeout(function(){
                $( '.mdl-layout__header' ).each(function () {
                        this.style.setProperty( 'background-color', 'rgba(0,0,0,0)', 'important' );
                });
            }, 200);
        }
        else {
            $( '.mdl-layout__header' ).each(function () {
                this.style.setProperty( 'background-color', 'rgba(0,0,0,0.75)', 'important' );
            });           
        }
});


