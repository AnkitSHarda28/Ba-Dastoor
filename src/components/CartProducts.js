import React from "react";
import IndividualCartProduct from "./IndividualCartProduct";

function CartProducts({
  cartProducts,
  cartProductIncrease,
  cartProductDecrease,
}) {
  console.log("workijng");
  return cartProducts.map((cartProduct) => (
    <IndividualCartProduct
      key={cartProduct.ID}
      cartProduct={cartProduct}
      cartProductIncrease={cartProductIncrease}
      cartProductDecrease={cartProductDecrease}
    />
  ));
}

export default CartProducts;
