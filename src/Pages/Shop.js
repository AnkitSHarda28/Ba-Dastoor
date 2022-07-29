import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { auth, fs } from "../Config/Config";
import styled from "styled-components";
import "./Shop.css";

const All = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

function Shop(props) {
  //getting current user uid

  function GetUserUid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }

  const uid = GetUserUid();

  //getting a current user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }

  const user = GetCurrentUser();
  // console.log(user)

  //state of products
  const [products, setProducts] = useState([]);

  //Getting products function
  const getProducts = async () => {
    const products = await fs.collection("products").get();
    const productsArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  };

  console.log(products.length);

  useEffect(() => {
    getProducts();
  }, []);

  let Product;

  const addToCart = (product) => {
    if (uid !== null) {
      // console.log(product);
      Product = product;
      Product["qty"] = 1;
      Product["TotalProductPrice"] = Product.qty * Product.price;
      fs.collection("Cart " + uid)
        .doc(product.ID)
        .set(Product)
        .then(() => {
          console.log("SuccessFully Added to cart");
        });
    } else {
      props.history.push("/login");
    }
    console.log(product);
  };

  return (
    <div className="ankit">
      <Navbar user={user} />
      <br />

      {products.length > 0 && (
        <div>
          <h1 className="text-center">Products</h1>
          <All>
            <Products products={products} addToCart={addToCart} />
          </All>
        </div>
      )}
      {products.length < 1 && (
        <div className="container-fluid">Please wait ....</div>
      )}
    </div>
  );
}

export default Shop;
