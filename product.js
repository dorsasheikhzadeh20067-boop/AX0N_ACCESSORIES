function increase() {

    let qty = document.getElementById("quantity");

    qty.value = Number(qty.value) + 1;
}

function decrease() {

    let qty = document.getElementById("quantity");

    if (qty.value > 1) {
        qty.value = Number(qty.value) - 1;
    }
}

document.querySelector(".add-cart")
.addEventListener("click", () => {

    const quantity =
    document.getElementById("quantity").value;

    const product = {
        id: 1,
        name: "گردنبند مشکی",
        price: 890000,
        quantity: Number(quantity)
    };

    localStorage.setItem(
        "cartItem",
        JSON.stringify(product)
    );

    alert("محصول به سبد خرید اضافه شد");
});