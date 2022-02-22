// getting the stored data from localStorage
let totalA=JSON.parse(localStorage.getItem("checkoutTotal"))
console.log(totalA)
// setting the amount 
document.getElementById("Rs3").textContent=`${(totalA.total + 20).toFixed(2)}`

document.getElementById("Rs1").textContent=`${(totalA.total).toFixed(2)}`
// setting the payable amount
let payableAmt=totalA.total+20;
 
// adding the click even on apply button
document.getElementById("apl_btn").addEventListener("click", apply)
// creating the function
function apply(){
    
    if(document.getElementById("code").value=="flat50"){
        document.getElementById("Rs3").textContent=`${(totalA.total + 20).toFixed(2)/2}`
       // document.getElementById("Rs3").innerText= "Rs "+Math.floor(payableAmt/2) 
       document.getElementById("Rs4").textContent=`${(totalA.total + 20).toFixed(2)/2}`
    }
}
// adding click event on payment button
document.getElementById("pay_btn").addEventListener("click", payment)
// creting the payment function which navegate to the payment page
function payment(){
    window.location.href="payment.html"

}