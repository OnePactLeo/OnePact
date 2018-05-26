function onSignIn(googleUser)
{ 
    var profile = googleUser.getBasicProfile() ;
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src', profile.getImageUrl());
    $("#email").text(profile.getEmail());
    $("#firstName").text(profile.getGivenName());
    $("#lastName").text(profile.getFamilyName());
    $("#name").text(profile.getName());
    $("#ID").text(profile.getId());
    var id_token = googleUser.getAuthResponse().id_token;
}


function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert("you have been signed out successfully");
        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    });
}




