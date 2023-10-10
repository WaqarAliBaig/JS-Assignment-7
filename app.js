// Chapter 46, 48 (Events)

// Q1:
function greet() {
  alert("Hello User!! \n Welcome to the Matrix");
}

// Q2:
function vanish() {
  document.getElementById("nextButton").style.display = "none";
}

// Q4:
function scrollBack() {
  window.scrollTo(0, 0);
}

// Q5:
function sound() {
  var audio = document.getElementById("play");
  audio.play(audio);
}

// Q6:
function newWindow() {
  var webPage = "https://www.google.com/webhp";
  window.open(webPage);
}

// Q7:
function goAway() {
  alert("Please do not disturb!");
}

// Q9:
function cheekh() {
  var awaz = document.getElementById("suno");
  awaz.play(awaz);
}

// Q10:
function msg() {
  alert("WooHoo!!");
}

// Q12:
function windowLink() {
  var website = "https://www.google.com/webhp";
  window.open(website);
}

// Chapter 49, 50 (Reading and Setting field values)
// Q1:
function read() {
  var userInput = document.getElementById("read").value;
  console.log(userInput);
}

// Q2:
function read1() {
  var checkBox = document.getElementById("read1").value;
  console.log(checkBox);
}

// Q3:
function bestCity() {
  var cleanCities = document.getElementById("cities").value;
  console.log(cleanCities);
}

// Q4:
function paragraph() {
  var text = document.getElementById("para");
  text.setAttribute("id");
}

// Q5:
function checkStatus() {
  var select = document.getElementById("maritalstatus").value;
  if (select != 'married') {
      document.getElementById("status").value = "available"
  }
  else {
      document.getElementById("status").value = "unavailable"
  }
}
