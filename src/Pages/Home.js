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

// //

// <div className="top">
//           <div className="leftSide">
//             <div>
//               <h1 className="big">The Brand of Nature</h1>
//             </div>
//             <div>
//
//             </div>
//             <div>
//               <div className="circles">
//                 <div className="c1 one">Made in India</div>
//                 <div className="c1 three">
//                   Naturally and Locally Sourced Products
//                 </div>
//               </div>
//             </div>
//           </div>
//
//           //{" "}
//         </div>

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
      <Navbar user={user} />
      <div>
        <div className="pageTop">
          <div className="leftSide">
            <div className="title">The Brand of Nature</div>
            <div className="butn">
              <Link to="shop">
                <button className="shopNow">Shop Now</button>
              </Link>
            </div>
            <div className="circles">
              <div className="circle c1">
                <h1 className="txt">Made in India</h1>
              </div>
              <div className="circle c2">
                <h1 className="txt1">Natural Products</h1>
              </div>
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
              Your text goes here. We Think As Strategists. We Do As Creators.
            </h1>
            <p className="smText">The small text goes here</p>
            <button className="shopNow">Find out More</button>
          </div>
          <div className="rSide">
            <img src={P1} alt="" className="photo2" />
            <img src={P2} alt="" className="photo2" />
            <img src={P3} alt="" className="photo2" />
          </div>
        </div>

        <div className="page3">
          <h1 className="head">What People Say</h1>
          <p className="smallText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            facere fuga in incidunt aliquam ullam totam quos natus vitae, sequi
            delectus dolores, explicabo assumenda itaque hic? Reprehenderit
            architecto dolorem sint officia in repellat necessitatibus! Animi
            commodi possimus quasi voluptatibus quas deserunt quae est harum?
            Voluptatum culpa minima soluta corporis inventore at cupiditate
            nostrum qui mollitia neque sapiente excepturi facilis dicta
            accusamus iure consequuntur repellat, ducimus ab perspiciatis.
            Tenetur sint necessitatibus veritatis qui maiores? Consequuntur,
            blanditiis pariatur minima soluta perspiciatis aspernatur nesciunt
            perferendis assumenda corrupti, deleniti quae similique consectetur,
            ratione ex enim eligendi explicabo temporibus? Sit ullam nisi
            possimus sint impedit.
          </p>
          <h4 className="personName">Ankit Sharda</h4>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={P1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={P2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={P3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
