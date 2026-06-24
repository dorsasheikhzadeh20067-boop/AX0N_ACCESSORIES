import { db } from "./firestore.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
const cartBox =
document.getElementById("cart-items");

const total =
document.getElementById("total");

async function loadCart(){

    let sum = 0;

    const querySnapshot =
    await getDocs(
        collection(db,"cart")
    );

    cartBox.innerHTML = "";

    querySnapshot.forEach(doc=>{

        const item = doc.data();

        const itemTotal =
        item.price * item.quantity;

        sum += itemTotal;

        cartBox.innerHTML += 
            <div class="cart-item">

                <h3>${item.name}</h3>

                <p>
                    تعداد:
                    ${item.quantity}
                </p>

                <p>
                    ${itemTotal.toLocaleString()}
                    تومان
                </p>

            </div>
        ;
    });

    total.textContent =
    sum.toLocaleString();
}

loadCart();

let cart =
JSON.parse(localStorage.getItem("cart")) || [];



const cartBox =
document.getElementById("cart-items");


const total =
document.getElementById("total");




function showCart(){


cartBox.innerHTML="";


let sum=0;



cart.forEach((item,index)=>{


let price =
item.price * item.quantity;


sum += price;



cartBox.innerHTML += 


<div class="cart-item">


<div class="product-info">

<h3>
${item.name}
</h3>


<p class="price">

${item.price.toLocaleString()}
تومان

</p>


</div>



<div class="quantity">


<button onclick="minus(${index})">
-
</button>


<span>
${item.quantity}
</span>


<button onclick="plus(${index})">
+
</button>



</div>



<p>

${price.toLocaleString()}
تومان

</p>



<button class="delete"
onclick="removeItem(${index})">

حذف

</button>


</div>



;



});
total.innerHTML =
sum.toLocaleString();


}




function plus(index){


cart[index].quantity++;


save();


}



function minus(index){


if(cart[index].quantity>1){


cart[index].quantity--;


}


save();


}




function removeItem(index){


cart.splice(index,1);


save();


}



function save(){


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


showCart();


}



showCart();