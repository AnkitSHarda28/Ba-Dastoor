import React, { useState, useEffect } from "react";
import "./Blog.css";
import Navbar from "../components/Navbar";
import { auth, fs } from "../Config/Config";
import Product from "../components/Product";
import Loader from "../components/Loader/Loader";
import Footer from "../components/Footer";

function Blog(props) {
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
        <h1 className="TopHead">Feedback</h1>
      </div>
      <section id="testimonials">
        <div class="testimonial-heading">
          <h4>Our Top Reviews</h4>
        </div>
        <div class="testimonial-box-container">
          <div class="testimonial-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src="https://cdn-icons-png.flaticon.com/512/1071/1071164.png" />
                </div>
                <div class="name-user">
                  <strong>Ankit Sharda</strong>
                  <span>@ankitsharda</span>
                </div>
              </div>

              <div class="reviews">⭐⭐⭐⭐⭐</div>
            </div>
            <div class="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quaerat quis? Provident temporibus architecto
                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                tenetur voluptates incidunt blanditiis sed atque cumque.
              </p>
            </div>
          </div>
          <div class="testimonial-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src="https://cdn-icons-png.flaticon.com/512/1507/1507155.png" />
                </div>
                <div class="name-user">
                  <strong>Noah Wood</strong>
                  <span>@noahwood</span>
                </div>
              </div>

              <div class="reviews">⭐⭐⭐</div>
            </div>
            <div class="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quaerat quis? Provident temporibus architecto
                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                tenetur voluptates incidunt blanditiis sed atque cumque.
              </p>
            </div>
          </div>
          <div class="testimonial-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src="https://cdn-icons-png.flaticon.com/512/7070/7070249.png" />
                </div>
                <div class="name-user">
                  <strong>Oliver Queen</strong>
                  <span>@oliverqueen</span>
                </div>
              </div>
              <div class="reviews">⭐⭐⭐⭐</div>
            </div>
            <div class="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quaerat quis? Provident temporibus architecto
                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                tenetur voluptates incidunt blanditiis sed atque cumque.
              </p>
            </div>
          </div>
          <div class="testimonial-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src="https://cdn-icons-png.flaticon.com/512/743/743424.png" />
                </div>
                <div class="name-user">
                  <strong>Barry Allen</strong>
                  <span>@barryallen</span>
                </div>
              </div>
              <div class="reviews">⭐⭐⭐⭐</div>
            </div>
            <div class="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quaerat quis? Provident temporibus architecto
                asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam
                tenetur voluptates incidunt blanditiis sed atque cumque.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
