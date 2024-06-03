let cartLS = JSON.parse(localStorage.getItem("cart")) || [];
function renderCart() {
    let query = "";

    for (let index = 0; index < cartLS.length; index++) {
        const element = cartLS[index];
        query += `
        <tr>
            <td>${element.name}</td>
            <td>${formatMoney(element.price)}</td>
            <td>
                <button class="decrease-btn" onclick="handleDecrease(${index})">-</button>
                ${element.quantity}
                <button class="increase-btn" onclick="handleIncrease(${index})">+</button>
            </td>
            <td>${formatMoney(element.price * element.quantity)}</td>
            <td><button class="remove-btn" onclick="handleRemove(${index})">Remove</button></td>
        </tr>
        `;
    }

    let listCartItem = document.getElementById("list-cart-item");

    listCartItem.innerHTML = query;
}

function handleDecrease(productIndex) {
    if (cartLS[productIndex].quantity >= 2) {
        // Nếu >= 2 thì giảm 1
        cartLS[productIndex].quantity -= 1;
    } else if (cartLS[productIndex].quantity == 1) {
        // Nếu đang là 1 mà ấn giảm thì xóa
        cartLS.splice(productIndex, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cartLS));

    renderCart();
}
function handleRemove(productIndex) {
    cartLS.splice(productIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cartLS));

    renderCart();
}

function handleIncrease(productIndex) {
    cartLS[productIndex].quantity += 1;

    localStorage.setItem("cart", JSON.stringify(cartLS));

    renderCart();
}

function formatMoney(amount) {
    return amount.toLocaleString();
}

function buyCart() {
    localStorage.clear("cart");
    renderCart();
}
renderCart();
