document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cartProducts = document.querySelector(".cart__products");

  products.forEach(product => {
    const quantityValue = product.querySelector(".product__quantity-value");
    const addToCartButton = product.querySelector(".product__add");
    const incButton = product.querySelector(".product__quantity-control_inc");
    const decButton = product.querySelector(".product__quantity-control_dec");

    incButton.addEventListener("click", function () {
      let quantity = parseInt(quantityValue.innerText);
      quantityValue.innerText = quantity + 1;
    });

    decButton.addEventListener("click", function () {
      let quantity = parseInt(quantityValue.innerText);
      if (quantity > 1) {
        quantityValue.innerText = quantity - 1;
      }
    });

    addToCartButton.addEventListener("click", function () {
      const productId = product.getAttribute("data-id");
      const productImage = product.querySelector(".product__image").getAttribute("src");
      const productCount = parseInt(quantityValue.innerText);

      let cartProduct = cartProducts.querySelector(`[data-id="${productId}"]`);

      if (cartProduct) {
        const cartProductCount = cartProduct.querySelector(".cart__product-count");
        cartProductCount.innerText = parseInt(cartProductCount.innerText) + productCount;
      } else {
        cartProduct = document.createElement("div");
        cartProduct.classList.add("cart__product");
        cartProduct.setAttribute("data-id", productId);

        const cartProductImage = document.createElement("img");
        cartProductImage.classList.add("cart__product-image");
        cartProductImage.setAttribute("src", productImage);

        const cartProductCount = document.createElement("div");
        cartProductCount.classList.add("cart__product-count");
        cartProductCount.innerText = productCount;

        cartProduct.appendChild(cartProductImage);
        cartProduct.appendChild(cartProductCount);

        cartProducts.appendChild(cartProduct);
      }
    });
  });
});
