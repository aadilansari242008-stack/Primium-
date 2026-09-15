let cart = [];

let total = 0;


/* ADD TO CART */

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();

    alert(name + " added to cart!");
}


/* UPDATE CART */

function updateCart() {

    document.getElementById("cartCount").innerText =
        cart.length;

    document.getElementById("totalPrice").innerText =
        total;

    let html = "";

    cart.forEach(function(item, index) {

        html += `
            <div class="cart-item">

                <span>${item.name}</span>

                <strong>
                    ₹${item.price}
                </strong>

            </div>
        `;

    });

    if (cart.length === 0) {

        html = `
            <p style="color:#aaa">
                Your cart is empty.
            </p>
        `;

    }

    document.getElementById("cartItems").innerHTML = html;
}


/* OPEN CART */

function openCart() {

    document.getElementById("cartOverlay").style.display =
        "flex";

    updateCart();
}


/* CLOSE CART */

function closeCart() {

    document.getElementById("cartOverlay").style.display =
        "none";
}


/* WHATSAPP ORDER */

function checkout() {

    if (cart.length === 0) {

        alert("Please add an item first.");

        return;
    }

    let message =
        "Hello Urban Spice!%0A%0AI want to order:%0A";

    cart.forEach(function(item) {

        message +=
            "• " +
            item.name +
            " - ₹" +
            item.price +
            "%0A";

    });

    message +=
        "%0ATotal: ₹" +
        total;

    /*
       IMPORTANT:
       Replace 919876543210 with
       the restaurant's WhatsApp number.
    */

    let phone = "7352585780";

    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        message,
        "_blank"
    );
}


/* INITIAL */

updateCart();
