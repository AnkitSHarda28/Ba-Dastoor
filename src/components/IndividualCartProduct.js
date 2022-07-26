import React from "react";
import { auth, fs } from "../Config/Config";

function IndividualCartProduct({
  cartProduct,
  cartProductIncrease,
  cartProductDecrease,
}) {
  const handleProductIncrease = () => {
    cartProductIncrease(cartProduct);
  };
  const handleProductDecrease = () => {
    cartProductDecrease(cartProduct);
  };
  const handleCartProductDelete = () => {
    console.log("delete");
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid)
          .doc(cartProduct.ID)
          .delete()
          .then(() => {
            console.log("Successfully deleted");
          });
      }
    });
  };
  return (
    <div>
      <div>
        <img src={cartProduct.url} alt="product-img" />
      </div>
      <div>
        <h1>{cartProduct.title} </h1>
      </div>
      <div>{cartProduct.description}</div>
      <div>{cartProduct.price}</div>
      <span>Quantity</span>
      <div>{cartProduct.qty}</div>
      <div>
        <button onClick={handleProductDecrease}>Minus</button>
        <button onClick={handleProductIncrease}>Plus</button>
      </div>
      <div>${cartProduct.TotalProductPrice}</div>
      <button onClick={handleCartProductDelete}>DELETE</button>
    </div>
  );
}

export default IndividualCartProduct;
