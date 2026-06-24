document.querySelector(".add-cart")
.addEventListener("click", async () => {

    const quantity =
    Number(document.getElementById("quantity").value);

    try{

        await addDoc(
            collection(db,"cart"),
            {
                productId:1,
                name:"گردنبند مشکی",
                price:890000,
                quantity:quantity,
                createdAt:new Date()
            }
        );

        alert("محصول به سبد خرید اضافه شد");

    }catch(error){

        console.error(error);

        alert("خطا در ذخیره سبد خرید");

    }

});

import { db } from "./firestore.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";