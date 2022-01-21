let cartValue = 0;
let value = 0;
const quantity = document.querySelector('.quantity');
const cart = document.querySelector('.cart-icon');

function cartQuantity(value) {
    cartValue += value;
    if(cartValue < 0) {
        cartValue = 0;
    }
    quantity.innerText = cartValue;
}


function addToCart() {

    value += cartValue
    if (value > 0) {
        cart.innerHTML = `
        <img src="images/icon-cart.svg" alt="">
        <p class="cart-quantity">
        ${value}
        </p>
        <div class="show-cart">
          <h2 class="show-cart-head">
            Cart
          </h2>
          <div class="show-cart-content">
            <div class="show-cart-image">
              <img src="images/image-product-1-thumbnail.jpg" alt="">
            </div>
            <div class="show-cart-brand">
              <p class="cart-brand">
                Autumn Limited Edition
              </p>
              <div class="price">
                <p class="cart-price-quantity">
                  $125.00 * ${value}
                </p>
                <p class="cart-price">
                  $${value * 125}.00
                </p>
              </div>
              
            </div>
            <div class="delete-icon" onclick="deleteCart()">
              <img src="images/icon-delete.svg" alt="">
            </div>
          </div>
          <button class="btn-checkout">
            Checkout
          </button>
        </div>
    `
    }
    cartValue = 0
    quantity.innerText = cartValue;
}

function deleteCart() {
    value = 0;
    cart.innerHTML = `
    <div class="cart-icon">
    <img src="images/icon-cart.svg" alt="">
    <div class="show-cart">
      <h2 class="show-cart-head">
        Cart
      </h2>
      <div class="show-cart-content">
        <p class="cart-empty">
          Yor Cart is empty.
        </p>
      </div>
    </div>
    `
    console.info(value)
}
