import React from "react";
import { auth, fs } from "../Config/Config";
import "../Pages/Cart.css";

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
    <div className="SingleCart">
      <div>
        <img src={cartProduct.url} alt="product-img" className="Image" />
      </div>
      <div>
        <h1 className="H1">{cartProduct.title} </h1>
      </div>
      <div className="Descrr">{cartProduct.description}</div>
      <div>Price - {cartProduct.price}</div>
      <span>Qty - {cartProduct.qty}</span>
      <div>
        <button className="shopNow" onClick={handleProductDecrease}>
          -
        </button>
        <button className="shopNow" onClick={handleProductIncrease}>
          +
        </button>
      </div>
      <div>₹{cartProduct.TotalProductPrice}</div>
      <button className="shopNow reed" onClick={handleCartProductDelete}>
        DELETE
      </button>
    </div>
  );
}

export default IndividualCartProduct;
