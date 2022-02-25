// adding click event on pay button
document.getElementById("pay").addEventListener("click", pay);
// creating the function 
function pay() {
  let cardNo = document.getElementById("card_no").value;
  let v = document.getElementById("valid").value;
  let cvv = document.getElementById("cvv").value;

  if (cardNo.length != 16) {
    alert("Invalid card number");
  } else if (v.length != 4) {
    console.log("2nd");
    alert("Validity Expired");
  } else if (cvv.length != 3) {
    console.log("3rd");
    alert("Invalid cvv");
  } else {
    alert("PAYMENT SUCCESSFULL AND YOUR ORDER IS PLACED");
    window.location.href = "index.html";
  }
}
