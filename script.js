document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    function updateCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const product = button.parentElement;
        const name = product.querySelector("h3").textContent;
        const price = parseInt(product.querySelector("p").textContent.replace("₹", ""));
        cart.push({ name, price });
        updateCart();
        alert(`${name} added to cart!`);
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = form.name.value;
      const email = form.email.value;
      const message = form.message.value;
  
      if (name && email && message) {
        alert("Thank you for contacting us, " + name + "! We will get back to you shortly.");
        form.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
  
    function renderCartItems() {
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <p>${item.name}</p>
          <p>₹${item.price}</p>
          <span class="remove-item" data-index="${index}">Remove</span>
        `;
        cartItemsContainer.appendChild(cartItem);
      });
  
      totalPriceElement.textContent = total.toFixed(2);
    }
  
    cartItemsContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("remove-item")) {
        const index = event.target.getAttribute("data-index");
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems();
      }
    });
  
    renderCartItems();
  
    // Handle checkout button
    document.getElementById("checkout").addEventListener("click", function () {
      if (cart.length === 0) {
        alert("Your cart is empty. Please add some items.");
      } else {
        alert("Proceeding to checkout... Thank you for shopping with us!");
        // You can add functionality for checkout here
      }
    });
  });
  