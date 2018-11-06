//calculate tip
function calculateTip() {
  var receiptTotal = document.getElementById("receipt-input").value;

  var tipAmount = document.getElementById("tip-amount").value;

  //proper input listed
  if (receiptTotal === "") {
    alert("Please enter amount");
    return;
  }

  var total = (receiptTotal * (tipAmount / 100));

  total = Math.round(total * 100) / 100;
  // have two digits after decimal
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";

document.getElementById("calculate").onclick = function() {
  calculateTip();
};

// function to reset the fields

function reset() {
  //clears div from screen
  let tip = document.getElementById("totalTip");
  tip.style.display = "none";
}
