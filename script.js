var i = 0;
var txt =
  " Hi there...My Name is Dipali Magar.Dedicated and Efficient Full Stack Developer.";
var speed = 100;

function Writing() {
  if (i < txt.length) {
    document.getElementById("write").innerHTML += txt.charAt(i);
    i++;
    setTimeout(Writing, speed);
  }
}
