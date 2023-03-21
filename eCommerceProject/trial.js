// $(document).ready(function(){
//     $('#shipCost').on('input', function () {
//         var shipCost = $(this).val();
//         var validShip = /^[0-9]*$/;
//         if (shipCost.trim().length == 0) {
//             $('.ship-msg').addClass('invalid-msg').text('Shipping cost is required');
//             $(this).addClass('invalid-input').removeClass('valid-input');

//         } else if (!validShip.test(shipCost)) {
//             $('.ship-msg').addClass('invalid-msg').text('Only numbers are allowed');
//             $(this).addClass('invalid-input').removeClass('valid-input');
//         }
//         else {
//             $('.ship-msg').empty();
//             $(this).addClass('valid-input').removeClass('invalid-input');

//         }
//     });
// });
var final;
let label = document.getElementById("label");
let label1 = document.getElementById("label1");
let shoppingCart = document.getElementById("shopping-cart");
let shippingCost = document.getElementById("shipCost");
let shippingCost1 = document.getElementById("shipCost1");
//shippingCost.value = 0;
let shipBtn = document.getElementById("shipBtn");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    //console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y, 0));
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    // console.log("Calculation is running when the update function is triggered");
};

calculation();

//generate Cart items total individually

let generateCartItems = () => {
    if (basket.length !== 0) {
        //console.log("Basket is not empty");
        return (shoppingCart.innerHTML = basket.map((x) => {
            // console.log(x);
            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return `
           <!-- <div class="cart-item">Hello</div> -->
                <div class="cart-item">
                    <img width="100" src=${search.img} alt="product">
                    <div class="details">
                        <div class="title-price-x">
                        
                             <h4 class="title-price">
                                <p>${search.name}</p>
                                <p class="cart-item-price">$ ${search.price}</p>
                            </h4> 
                            
                            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i> 
                        </div>    
                         <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    <h3>$ ${(item * search.price) + ((item * search.price) * search.tax /100)}</h3> 
                    <small>Tax: ${search.tax}%</small>
                    </div>
                </div>
            `;
        })
        .join(""));
    }
    else {
        //console.log("basket is empty");
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href="index.html">
            <button class="homeBtn">Back to Home</button>
            </a>
        `;
    }
};

generateCartItems();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,    
        })
    }
    else {
        search.item += 1;
        
    }
    
    // console.log(basket);
    
    update(selectedItem.id);
    totalAmount();
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        return;
    }
    else if (search.item === 0) {
        return;
    }
    else {
        search.item -= 1;
    }
    // if(search === undefined){
    //     basket.push({
    //         id: selectedItem.id,
    //         item: 1,
    //     })  
    // }
    // else{
    //     search.item -= 1
    // }
    // console.log(basket);
    update(selectedItem.id);
    
    basket = basket.filter((x) => x.item !== 0);
    
    generateCartItems(); //re rendering the objects from local storage 
    
    localStorage.setItem("data", JSON.stringify(basket));
};


let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();
};

let removeItem =(id)=>{
    let selectedItem = id;
    // console.log(selectedItem.id);
    basket = basket.filter((x)=> x.id !== selectedItem.id);
    generateCartItems();
    totalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
    
};

let totalAmount = () => {
    if(basket.length !== 0){
        let amount = basket.map((x)=>{
            let {item, id,} = x;
            let search = shopItemsData.find((y)=> y.id == id) || []; 
            return (item * search.price) + ((item * search.price) * search.tax /100);
        }).reduce((x,y)=> x+y, 0);
         
        
        document.getElementById("shipCost1").value = amount;
        document.getElementById("shipCost").value = 0;
        //let final = 0;
        shipBtn.addEventListener('click', function () {
            final = parseFloat(document.getElementById("shipCost1").value) + parseFloat(document.getElementById("shipCost").value);
            
            
            label.innerHTML = `
            <a href="confirmation">hi</a>
            <h2>Total Bill : $ ${final}</h2>
            <button class="checkout"><a href="confirmation.html">Check Out</a></button>
            <button onclick="clearCart()" class="removeAll">Clear Cart</button>
            `;
        });
        // shipBtn.addEventListener('click', function () {

        //     final = basket.map((x)=>{
                
        //          x.bill = parseFloat(document.getElementById("shipCost1").value) + parseFloat(document.getElementById("shipCost").value);
        //          label.innerHTML = `
        //     <a href="confirmation">hi</a>
        //     <h2>Total Bill : $ ${x.bill}</h2>
        //     <button class="checkout"><a href="confirmation.html">Check Out</a></button>
        //     <button onclick="clearCart()" class="removeAll">Clear Cart</button>
        //     `;
        //     return x.bill;
        //     }); 
            
        // });
        //ship();
        //shipBtn.addEventListener(onclick, ship());
        // label.innerHTML = `
        // <h2>Total Bill : $ ${final}</h2>
        // <button class="checkout">Check Out</button>
        // <button onclick="clearCart()" class="removeAll">Clear Cart</button>
        // `;
        // console.log(amount);
    
       
    }
    else{
        document.getElementById("ship-amount").style.display = "none" ;
        //document.getElementById("shipCost").value = 0;
        return;}
}

totalAmount();

let clearCart = () => {
    basket = [];
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
    document.getElementById("ship-amount").style.display = "none" ;
}

// let confirm = (id) =>{
//     //let selectedItem = id;
//     let search = basket.find((x) => x.id === id);
//     label1.innerHTML =`<table><tr>
//     <th>ID<th>
//     </tr><tr><td>${search.item}</td></tr></table>`
//     generateCartItems();
//     totalAmount();
//     localStorage.setItem("data", JSON.stringify(basket));
    
// }
//this return the array with only the total of individual elements when reduce method is added it addes the all the value in the returned array 

// if(basket.length !== 0){
//     let amount = basket.map((x)=>{
//         let {item, id} = x;
//         let search = shopItemsData.find((y)=> y.id == id)
//         return item * search.price;
//     })