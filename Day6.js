var inputValue = document.getElementById("username-input").value;
var genderValue = document.getElementById("gender-input").value;

var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 3);

function saveCookie(key, value, expireDate) {
  document.cookie = key + "=" + value + ";expires=" + expireDate.toUTCString() + ";path=/";
}

function getCookie(cookiename) {
  var name = cookiename + "=";
  var cookieArray = document.cookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

function hasCookie(cookiename) {
  var name = cookiename + "=";
  var cookieArray = document.cookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return true;
    }
  }
  return false;
}

var userName = getCookie("username");
var userGender = getCookie("gender");
var userVisits = getCookie("visits");
if (!userVisits) {
  userVisits = 1;
} else {
  userVisits++;
}
saveCookie("visits", userVisits, expireDate);

var profilePic = "";
if (userGender == "male") {
  profilePic = "./1 (1).jpg"; // Replace with path to male profile pic
} else {
  profilePic = "./2 (1).jpg"; // Replace with path to female profile pic
}
document.getElementById("profile-pic").src = profilePic;
var greetingMsg = "Welcome back, " + userName + "! You have visited this site " + userVisits + " times.";
document.getElementById("greeting").innerHTML = greetingMsg;

var pageName = location.pathname.split("/").pop();
if (pageName == "registration.html") {
  location.replace("profile.html");
}

document.getElementById("submit-btn").addEventListener("click", function(event) {
  event.preventDefault();
  userName = document.getElementById("username-input").value;
  userGender = document.getElementById("gender-input").value;
  saveCookie("username", userName, expireDate);
  saveCookie("gender", userGender, expireDate);
  location.reload();
});