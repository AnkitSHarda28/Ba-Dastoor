import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { auth, fs } from "../Config/Config";
import "./Home.css";
import { Link } from "react-router-dom";
import V1 from "../Images/V1.png";
import V2 from "../Images/V2.png";
import P1 from "../Images/1.png";
import P2 from "../Images/2.png";
import P3 from "../Images/3.png";
import Brand from "../Images/brand.svg";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function Home(props) {
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
      <div>
        <Navbar user={user} />
        <div className="pageTop">
          <div className="leftSide">
            <div>
              <img src={Brand} alt="" height={400} className="svgImg" />
            </div>
            <div className="title">The Brand of Nature</div>
            <div className="butn">
              <Link to="shop">
                <button className="shopNow">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="rightSide">
            <img src={V1} alt="discount" className="photo" />
            <img src={V2} alt="discount" className="photo" />
          </div>
        </div>

        <div className="page2">
          <div className="lSide">
            <h1 className="yourText">
              A one spot destination for all the natural products for you!!
            </h1>
            <p className="smText">Are you excited?</p>
            <button className="shopNow">Find out More</button>
          </div>
          <div className="rSide">
            <img src={P1} alt="" className="photo2" />
            <img src={P2} alt="" className="photo2" />
            <img src={P3} alt="" className="photo2" />
          </div>
        </div>

        <div className="page3">
          <Carousel />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
