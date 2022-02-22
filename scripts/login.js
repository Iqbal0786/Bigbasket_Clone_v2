

// onclick button for seeing loginpage.

document.querySelector(".button").addEventListener("click",function(){
    
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".popup-content").style.display = "inline";
})

// onclick button for change input placeholder and button text.
function email(){
    document.getElementsByName("change")[0].placeholder = "Enter Your Email"
    document.getElementById("changetext").innerHTML="Login with Mobile Number"   
}

// onclick button for set mobileno. in localstorage.
function submit(){
    var number = document.getElementById("number").value;
    localStorage.setItem("mobile-no.",number);

    document.querySelector(".popup-content").style.display = "none";
    document.querySelector(".about-you").style.display = "inline";
}

// onclick button for set all detail in localstorage
function start_shopping(){
    var firstname  = document.getElementById("firstname").value;
    localStorage.setItem("firstname",firstname);

    var lastname  = document.getElementById("lastname").value;
    localStorage.setItem("lastname",lastname);

    var email  = document.getElementById("email").value;
    localStorage.setItem("email",email);

    document.querySelector(".popup").style.display = "none";
    document.querySelector(".about-you").style.display = "none";
   
    window.location.href="./index.html";



    var setname = localStorage.getItem("firstname");
    document.getElementById("name").innerHTML= setname;
}