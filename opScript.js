function onSignIn(googleUser)
{ 
    var profile = googleUser.getBasicProfile() ;
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src', profile.getImageUrl());                        //gets profile picture
    $("#email").text(profile.getEmail());                                //gets email address
    $("#name").text(profile.getName());                                  //gets Full Name
    $("#ID").text(profile.getId());                                      //gets user ID
    var id_token = googleUser.getAuthResponse().id_token;                //gets token id
    var fullName = profile.getName() ;                                    //stores full name into a variable
    var email = profile.getEmail();                                      //stores email address into a variable 
    alert("hello " + fullName + " , your email address is " + email);
  
}


function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert("you have been logged off ");
        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    });
}

$('.art').on('click', function (){
    var art = 'artist'
    alert(art+uPname);
});


