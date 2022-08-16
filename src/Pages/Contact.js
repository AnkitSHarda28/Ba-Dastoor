import React, { useState, useEffect } from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";
import { auth, fs } from "../Config/Config";
import Insta from "../Images/Insta.svg";
import Gmail from "../Images/Gmail.svg";
import Linkedin from "../Images/Linkedin.svg";
import Twitter from "../Images/Twitter.svg";

function Contact(props) {
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
    <div>
      <Navbar user={user} />
      <div>
        <h1 className="TopHead">Contact Us</h1>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/_ba.dastoor/" target="_blank">
          <img src={Insta} width={100} height={100} alt="fb" className="imge" />
        </a>
        <a href="mailto:dastoor.ba.in@gmail.com" target="_blank">
          <img src={Gmail} width={70} height={70} alt="fb" className="imge" />
        </a>
        <a
          href="https://www.linkedin.com/in/ba-dastoor-india-992a30246/"
          target="_blank"
        >
          <img
            src={Linkedin}
            width={70}
            height={70}
            alt="fb"
            className="imge"
          />
        </a>
        <a
          href="https://help.twitter.com/en/using-twitter/twitter-search-not-working"
          target="_blank"
        >
          <img src={Twitter} width={70} height={70} alt="fb" className="imge" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
