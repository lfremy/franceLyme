var i = 0;
var txt = 'Et si une tique changeait votre vie?'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}