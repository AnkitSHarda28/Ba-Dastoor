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
      <div className="insider">
        <div className="cross" onClick={handleCartProductDelete}></div>
        <div>
          <img src={cartProduct.url} alt="product-img" className="Image111" />
        </div>
        <div>
          <h1 className="H1">{cartProduct.title} </h1>
        </div>
        <div className="Descrr">{cartProduct.description}</div>
        <div>₹ {cartProduct.price}</div>
        <div className="quantity">
          <button className="bbtn minus" onClick={handleProductDecrease}>
            -
          </button>
          <span>{cartProduct.qty}</span>
          <button className="bbtn plus" onClick={handleProductIncrease}>
            +
          </button>
        </div>

        <div>₹{cartProduct.TotalProductPrice}</div>
      </div>
    </div>
  );
}

export default IndividualCartProduct;
