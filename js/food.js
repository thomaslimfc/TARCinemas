//open and close cart
let carticon = document.querySelector("#carticon")
let cart = document.querySelector(".cart")
let quit = document.querySelector("#quit")

carticon.onclick=()=>{
    cart.classList.add("active");
}

quit.onclick=()=>{
    cart.classList.remove("active");
}

//cart working
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}

//remove food
function ready(){
    var reomveCartButtons = document.getElementsByClassName('cartremove');
    console.log(reomveCartButtons)
    for (var i = 0; i < reomveCartButtons.length; i++){
        var button = reomveCartButtons[i]
        button.addEventListener("click",removeCartItem);
    }
    //quantity changes
    var quantityInputs = document.getElementsByClassName('cartquantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change",quantityChanged);
    }
    //Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click",addCartClicked); 
    }

} 



function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//quantity changes
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1 ;
    }
    updatetotal();
}

//add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("foodtitle")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("food-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

function addProductToCart(title,price,productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cartbox");
    var cartItem = document.getElementsByClassName("cartcontent")[0];
    var cartItemNames = cartItem.getElementsByClassName("cartfoodtittle");
    for (var i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
        alert("You have already add this food to cart");
        return;
    } 
 }


var cartBoxContent = `
                    <img src="${productImg}" alt="" class="cartimg">
                    <div class="detailbox">
                        <div class="cartfoodtittle">${title}</div>
                        <div class="cartprice">${price}</div>
                        <input type="number" value="1" class="cartquantity">
                    </div>
                    <i class='bx bxs-trash cartremove' ></i> `;

cartShopBox.innerHTML = cartBoxContent;
cartItem.append(cartShopBox);
cartShopBox
  .getElementsByClassName("cartremove")[0]
  .addEventListener("click", removeCartItem);
cartShopBox
  .getElementsByClassName("cartquantity")[0]
  .addEventListener("change",quantityChanged);
}


//total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cartcontent")[0];
    var cartBoxes = cartContent.getElementsByClassName("cartbox");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cartprice")[0];
        var quantityElement = cartBox.getElementsByClassName("cartquantity")[0];
        var price = parseFloat(priceElement.innerText.replace("RM",""));
        var quantity = quantityElement.value;
        total= total +(price * quantity);

        document.getElementsByClassName("totalprice")[0].innerText="RM"+ total;
    }


}