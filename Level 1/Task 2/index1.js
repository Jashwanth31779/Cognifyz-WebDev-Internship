// Button color change
const colorbtn = document.getElementById("colorbtn");
colorbtn.addEventListener("click", function() {
  const colors = ["#e74c3c", "#27ae60", "#8e44ad", "#f39c12", "#3498db"];
  const random = Math.floor(Math.random() * colors.length);
  colorbtn.style.background = colors[random];
});

// Greeting message
const greet = document.getElementById("greet");
const hour = new Date().getHours();

if (hour < 12) {
  greet.innerText = "Good Morning!";
} else if (hour < 18) {
  greet.innerText = "Good Afternoon!";
} else {
  greet.innerText = "Good Evening!";
}

// Calculator
const calcbtn = document.getElementById("calcbtn");
const res = document.getElementById("res");

calcbtn.addEventListener("click", function() {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);

  if (!isNaN(n1) && !isNaN(n2)) {
    res.innerText = "Result: " + (n1 + n2);
  } else {
    res.innerText = "Please enter valid numbers.";
  }
});
