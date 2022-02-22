
// adding nav bar in cart page
import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
document.getElementById("navBar").innerHTML=navbar();
// adding footer page 
document.getElementById("footer").innerHTML=footer();
// addding onclick event on checkout button and navigate to checkout page
  let checkoutButton=document.querySelector("#checkoutButtonDiv>button");
   checkoutButton.addEventListener("click",()=>{
       window.location.href="./checkout.html";
   });
   // adding onclick event on countinue button that will navigate to the home page again
   let continueBtn=document.getElementById("continueShopBtn");
   continueBtn.addEventListener("click",()=>{
       window.location.href="./index.html";
   })
    // getting the localStorage data
    var storeData= JSON.parse(localStorage.getItem("bigbasket"))
    // getting the parent div to append all the items
    let parent= document.getElementById("cartItems");
    // variable to store total amount
    let total=0;

    // show data function that will display all the items in the cart section
    function showData(data){
        parent.innerHTML="";
        // mapping the stored data and appending it to the parent div
        data.map((elem,index)=>{
            //  creating child div
        let childDiv= document.createElement("div");
        childDiv.setAttribute("class","childDiv");
        // creating its child div that is left
        let leftCDiv= document.createElement("div");
         leftCDiv.setAttribute("class","leftC");

         let leftItemDiv= document.createElement("div");
         leftItemDiv.setAttribute("class","leftItem");
         let brandName=document.createElement("h5");
         brandName.textContent="FRESHO";
         let title=document.createElement("p");
          title.textContent=elem.name;
          leftItemDiv.append(brandName,title);
        //  right item div
        let rightItemDiv= document.createElement("div");
         rightItemDiv.setAttribute("class","rightItem");
         let unitPrice= document.createElement("p");
        unitPrice.setAttribute("class","unitPrice");
         unitPrice.textContent="Rs"+elem.price;
         // button div
         let buttonDiv=document.createElement("div");
         buttonDiv.setAttribute("class","quantityBtnDiv");
         let plusButton=document.createElement("button");
         plusButton.setAttribute("class","increase");
         plusButton.textContent="+";
         let valueButton=document.createElement("button");
         valueButton.setAttribute("class","showQuantity");
         valueButton.textContent=1;
         let minusButton=document.createElement("button");
         minusButton.setAttribute("class","decrease");
         minusButton.textContent="-";
         buttonDiv.append(plusButton,valueButton,minusButton);
         // price div which contains a delete icon
         let priceDeleteDiv=document.createElement("div");
         priceDeleteDiv.setAttribute("class","priceAndDeleteDiv");
         let subTotalPrice= document.createElement("p");
          subTotalPrice.setAttribute("class","subTotalPrice");
         subTotalPrice.textContent="Rs "+elem.price;
        //    delete icon div
         let deleteIconDiv=document.createElement("div");
          deleteIconDiv.setAttribute("class","deleteIcon");
          let icon=document.createElement("i");
          icon.setAttribute("class","fas fa-times");
          icon.addEventListener("click",()=>{
              deleteItem(index);
          })
          deleteIconDiv.append(icon);
          priceDeleteDiv.append(subTotalPrice,deleteIconDiv);
          rightItemDiv.append(unitPrice,buttonDiv,priceDeleteDiv)
          leftCDiv.append(leftItemDiv,rightItemDiv);
           //  creating right child of child div
           let rightCDiv=document.createElement("div");
            rightCDiv.setAttribute("class","rightC");
            let savedPrice=document.createElement("p");
            savedPrice.textContent="Rs 00.00";
            rightCDiv.append(savedPrice);
            childDiv.append(leftCDiv,rightCDiv);
                total+=elem.price;
                parent.append(childDiv)
    })
    }

    // calling the function
    showData(storeData);
    
    // some condition to show the amount and count of cart items
    if(storeData.length>0){
        document.getElementById("topTotal").textContent=`Your Basket (${storeData.length} items)`;
        document.getElementById("itemAmount").textContent=`Rs ${total.toFixed(2)}`;
        // setting the total amount in local storage
        let totalCost={
             total:total
        }
        // setting the amount and count of icons in the dom
        localStorage.setItem("checkoutTotal",JSON.stringify(totalCost));
        document.getElementById("totalDivPrice").textContent=`Rs ${total.toFixed(2)}`;
        document.getElementById("subTotalPrice").textContent=`Rs ${total.toFixed(2)}`;
        document.getElementById("cuponTotal").textContent=`* For this order: Accepted food coupon is Rs.${total}`;
        document.getElementById("itemCount").textContent=`${storeData.length} items`;
        document.getElementById("itemCountNav").textContent=`${storeData.length} items`;
    }
    else{
        document.getElementById("topTotal").textContent=`There are no items in your basket.`;
        document.getElementById("itemCount").textContent=` 0 items`;
    }

    
// delete function 
    function  deleteItem(index){
        let newPrice=0;
        storeData.splice(index,1);
        localStorage.setItem("bigbasket",JSON.stringify(storeData));
         storeData.map((elem)=>{
             newPrice+=elem.price;
         })
         // setting the total amount in local storage
        let totalCost={
             total:newPrice
        }
         // setting total updated amount in localStorage
         localStorage.setItem("checkoutTotal",JSON.stringify(totalCost));
        document.getElementById("topTotal").textContent=`Your Basket (${storeData.length} items)`;
        document.getElementById("itemAmount").textContent=`Rs ${newPrice.toFixed(2)}`;
        document.getElementById("totalDivPrice").textContent=`Rs ${newPrice.toFixed(2)}`;
        document.getElementById("subTotalPrice").textContent=`Rs ${newPrice.toFixed(2)}`;
        document.getElementById("cuponTotal").textContent=`* For this order: Accepted food coupon is Rs.${newPrice.toFixed(2)}`;
        document.getElementById("itemCount").textContent=`${storeData.length} items`;
        document.getElementById("itemCountNav").textContent=`${storeData.length} items`;
        showData(storeData);
    
    }

 // adding event to empty button 
    let emptyButton=document.getElementById("emptyButton");
    emptyButton.addEventListener("click",emptyCart);
 // creating the function
    function emptyCart(){
    
       if(confirm("Are you sure you want to remove all items from your basket?")){
        storeData.splice(0);
        localStorage.setItem("bigbasket",JSON.stringify(storeData));
        // setting the total amount in local storage
        let totalCost={
            total:0
        }
         // setting total updated amount in localStorage
         localStorage.setItem("checkoutTotal",JSON.stringify(totalCost));
        document.getElementById("topTotal").textContent=`There are no items in your basket.`;
        document.getElementById("itemCount").textContent=` 0 items`;
        document.getElementById("itemCountNav").textContent=`0 items`;
        document.getElementById("itemAmount").textContent=`Rs 00.00`;
        document.getElementById("totalDivPrice").textContent=`Rs 00.00`;
        document.getElementById("subTotalPrice").textContent=`Rs 00.00`;
        document.getElementById("cuponTotal").textContent=`* For this order: Accepted food coupon is Rs 00.00`;
        showData(storeData);
       }
    }
    // console.log(total)