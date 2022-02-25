// importing the navbar and footer
import navbar from "../components/navbar.js" ;
import footer from '../components/footer.js'; 
// calling the imported functions
var nav_bar = document.getElementById("nav")
nav_bar.innerHTML = navbar()

var footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()

// fetching all products from db
var Data;
async function getdata(){
    try{
        let req=await fetch("http://localhost:9999/products");
        let data=await req.json();
        Data=data.data.products;
    
        display(data.data.products);
    }
    catch(err){
        console.log(err);
    }
}
// calling getdata()
getdata();

// creating debouncing function
let inputStr= document.querySelector("#searchbar");
let search_waiting; // to store searced keywords
  async function data(){
    let search=inputStr.value;
     if(search.length<=2){
         return false
     }
     try{
        let req=await fetch(`http://localhost:9999/products?s=${search}`);
        let data=await req.json();
         Data=data;
        // let all=data.data.products
        console.log(data);
        display(data);
    }
    catch(err){
        console.log(err);
    }
 }
 inputStr.oninput=()=>{
   
    deBounce(data,1000);
    
 }

 // debounce function
function deBounce(fun,delay){
     if(search_waiting){
         clearTimeout(search_waiting);
         getdata(); // calling getdata() again to reload the all data from db
     }
   search_waiting=setTimeout(()=>{
          fun();
      },delay);
}



// creating the display function
function display(data){
    // getting the parent div to append the products
let prd=document.getElementById("products")
prd.innerHTML="";
// mapping the created products data
data.forEach(function(elem,index){
var mainDiv=document.createElement("div");
mainDiv.setAttribute("id","mainDiv")
var image=document.createElement("img");
image.src=elem.image_url
image.setAttribute("id","imgid")
var offdiv=document.createElement("div")
offdiv.innerText=elem.off;
offdiv.setAttribute("id","offdiv")
var idiv=document.createElement("div")

var name=document.createElement("h7");
name.style.fontSize="20px"
var fresh=document.createElement("div")
fresh.setAttribute("id","fresh")
fresh.textContent="Fresho"
name.textContent=elem.name;
name.style.backgroundColor="white";
var veg=document.createElement("img")
veg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh71sfIQVPk_TuhnuWB0Q1E6FlciHqRH-wRA&usqp=CAU"
veg.setAttribute("id","logo")


var price=document.createElement("h7");
var price2=document.createElement("h7");
price2.textContent=elem.mrp2;
price2.setAttribute("id","price2")
price.textContent=`Rs ${elem.mrp}`;
price.style.fontSize="18px"

var truck=document.createElement("img")
truck.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzs53TfNnjTRqFDU7kRfOsoh3LE14bJe5Qg&usqp=CAU"
var mdiv=document.createElement("div")
mdiv.setAttribute("id","mdiv")
var divOne=document.createElement("div")
divOne.append(truck)
var divTwo=document.createElement("div")
divTwo.setAttribute("id","divTwo")

var div3=document.createElement("div")
div3.setAttribute("id","div3")
div3.textContent="Standard Delivery: 21 Jan, 7:00AM - 9:00AM"
divTwo.append(price2,price,div3);
mdiv.append(divOne,divTwo)

var coldiv=document.createElement("div")
coldiv.setAttribute("id","coldiv")

//button 
var qtybox=document.createElement("div")
qtybox.setAttribute("id","qtybox")
qtybox.innerText="1"

var btn = document.createElement("button");
btn.textContent="Add";
btn.setAttribute("id","cartbtn");
var count=2;
// adding click event to add items in the cart
btn.addEventListener("click",function(){
    qtybox.textContent=count++;
    addtocart(elem.name,elem.mrp);
     alert(`${elem.name} is added successfully`)

  })


var btndiv=document.createElement("div")
btndiv.setAttribute("id","btndiv");
var qtydiv=document.createElement("div")
qtydiv.setAttribute("id","qtydiv")
var qty=document.createElement("id","qty")
qty.textContent="Qty"


var cartbtn=document.createElement("div")
cartbtn.append(btn)

qtydiv.append(qty,qtybox)
btndiv.append(qtydiv,cartbtn)
coldiv.append(mdiv,btndiv)


idiv.append(offdiv,image)
mainDiv.append(idiv,veg,fresh,name,coldiv);
prd.append(mainDiv);
});
}
// add to cart function 
function addtocart(name,price){
    // creating local storage
let cartdata=JSON.parse(localStorage.getItem("bigbasket")) || [];
// creating object to store cart data
let obj={
    name:name,
    price:price,
}
cartdata.push(obj);
// settig the total cart items
document.getElementById("itemCountNav").textContent=`${cartdata.length} item`;
// setting local storage
localStorage.setItem("bigbasket",JSON.stringify(cartdata)); 

}
// getting the local storage of cart data
let cartdata= JSON.parse(localStorage.getItem("bigbasket"))
document.getElementById("itemCountNav").textContent=`${cartdata.length} item`;

// adding sort functionality 

var sort=document.getElementById("sortPrice");
sort.addEventListener("change",function priceSort(){
var sel=document.querySelector("#sortPrice").value;
if(sel=="asc"){
    Data.sort(function(a,b){
        return a.mrp-b.mrp;
    })
}
if(sel=="dsc"){
    Data.sort(function(a,b){
        return b.mrp-a.mrp;
    })
}
if(sel=="nasc"){
    Data.sort(function(a,b){
 if(b.name>a.name){
     return -1;
 }
})
}
if(sel=="ndsc"){
    Data.sort(function(a,b){
 if(a.name>b.name){
     return -1;
 }
})
}
display(Data);
});