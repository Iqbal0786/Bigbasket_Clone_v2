// importing the navbar and footer
import navbar from "../components/navbar.js" ;
import footer from '../components/footer.js'; 
// calling the imported functions
var nav_bar = document.getElementById("nav")
nav_bar.innerHTML = navbar()

var footer_div = document.getElementById("footer")
footer_div.innerHTML = footer()

// fetch("http://localhost:9999/products")
var Data;
async function getdata(){
    try{
        let req=await fetch("http://localhost:9999/products");
        let data=await req.json();
        Data=data;
        console.log(data);
        display(data);
    }
    catch(err){
        console.log(err);
    }
}
getdata();
// product data
// let data=[{
// name:"Onion",
// off:"Get 30% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/40075537_5-fresho-onion.jpg",
// mrp:38.38,
// mrp2:"55.00",
// },
// {
// name:"Tomato - Local",
// off:"Get 20% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000203_16-fresho-tomato-local.jpg",
// mrp:26.26,
// mrp2:"32.83",
// },
// {
// name:"Potato",
// off:"Get 29% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
// mrp:28.28,
// mrp2:"40.00",
// },
// {
// name:"Tomato - Hybrid",
// off:"Get 25% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000201_15-fresho-tomato-hybrid.jpg",
// mrp:14.14,
// mrp2:"18.75",
// },
// {
// name:"Ladies Finger",
// off:"Get 41% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
// mrp:22.22,
// mrp2:"37.50",
// },
// {
// name:"Carrot - Orange",
// off:"Get 27% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000072_16-fresho-carrot-orange.jpg",
// mrp:49.49,
// mrp2:"68.63",
// },
// {
// name:"Cucumber",
// off:"Get 27% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
// mrp:10.10,
// mrp2:"13.90",
// },
// {
// name:"Banana - Yelakki",
// off:"Get 32% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000031_21-fresho-banana-yelakki.jpg",
// mrp:55.27,
// mrp2:"81.85",
// },
// {
// name:"Coriander Leaves",
// off:"Get 46% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000098_9-fresho-coriander-leaves.jpg",
// mrp:10.10,
// mrp2:"18.75",
// },
// {
// name:"Mushrooms - Button",
// off:"Get 39% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000273_16-fresho-mushrooms-button.jpg",
// mrp:44.44,
// mrp2:"72.50",
// },
// {
// name:"Capsicum - Green",
// off:"Get 25% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
// mrp:37.37,
// mrp2:"50.00",
// },
// {
// name:"Palak - Cleaned, without roots",
// off:"Get 20% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000188_12-fresho-palak-cleaned-without-roots.jpg",
// mrp:22.50,
// mrp2:"28.13",
// },
// {
// name:"Beans - Haricot",
// off:"Get 20% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/40089743_2-fresho-beans-haricot.jpg",
// mrp:16.50,
// mrp2:"20.63",
// },
// {
// name:"Orange - Nagpur, Regular",
// off:"Get 20% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000266_27-fresho-orange-nagpur-regular.jpg",
// mrp:89.00,
// mrp2:"111.25",
// },
// {
// name:"Tender Coconut - Medium",
// off:"Get 20% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/40057966_2-fresho-tender-coconut-medium.jpg",
// mrp:30.00,
// mrp2:"37.50",
// },
// {
// name:"Lemon",
// off:"Get 35% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000127_17-fresho-lemon.jpg",
// mrp:12.12,
// mrp2:"18.75",
// },
// {
// name:"Potato - New Crop",
// off:"Get 31% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/40048457_7-fresho-potato-new-crop.jpg",
// mrp:37.00,
// mrp2:"53.75",
// },
// {
// name:"Onion - Organically Grown",
// off:"Get 20% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/40023472_5-fresho-onion-organically-grown.jpg",
// mrp:45.00,
// mrp2:"55.25",
// },
// {
// name:"Coconut - Medium",
// off:"Get 29% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/10000093_16-fresho-coconut-medium.jpg",
// mrp:23.23,
// mrp2:"32.50",
// },
// {
// name:"Tomato - Local, Organically Grown",
// off:"Get 20% off",
// image_url:"https://www.bigbasket.com/media/uploads/p/s/40022638_4-fresho-tomato-local-organically-grown.jpg",
// mrp:19.00,
// mrp2:"23.75",
// }
// ]

// calling the display function



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