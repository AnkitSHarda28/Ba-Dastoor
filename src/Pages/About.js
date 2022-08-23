import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { auth, fs } from "../Config/Config";
import "./About.css";
import Footer from "../components/Footer";
import P4 from "../Images/4.png";
import P5 from "../Images/5.jpeg";
import Vani from "../Images/Vani.png";
import Ria from "../Images/ria.jpeg";
import Amogh from "../Images/amogh.jpg";
import Ananya from "../Images/ananya.jpeg";
import Anirudh from "../Images/aniruddh.jpeg";
import Ashna from "../Images/ashna.jpeg";
import Loader from "../components/Loader/Loader";

function About(props) {
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
      <h1 className="TopHead">About Us</h1>
      <div className="intro">
        <img src={P4} alt="" className="group" />
        <img src={P5} alt="" className="group" />
      </div>
      <div className="what2">
        <div className="what">
          <h1 className="question">What's Badastoor</h1>
          <p className="further">
            An initiative to make small business grow. We are a social
            enterprise with the purpose of aiding small businesses, with a
            concentration on those in rural areas. We want to do this by
            providing small businesses with both virtual and physical space to
            help them grow and thrive. We are especially interested in working
            with suppliers that do not have the means or reach to sell in big
            urban regions.
          </p>
          <p className="further">
            Self-care, particularly skin care, has also become an important
            component of people's lifestyles as more and more people become
            aware of the importance of skin and body health. We understand how
            important it is for individuals to use products that are free of
            hazardous chemicals on their skin, thus we provide cruelty-free
            goods devoid of synthetic scents. Furthermore, during the lockdown,
            a slew of little companies sprung up, and people reacted positively
            to them, investigating their offerings and purchasing from them
            instead of their normal established enterprises.
          </p>
          <p className="further">
            Small enterprises are recognised for offering low-cost items because
            the majority of them are home-grown and do not require expensive
            inputs.
          </p>
          <p className="further">
            We want to highlight the environmentally conscious small enterprises
            that have emerged from rural regions. These folks are unable to
            access metro cities for a variety of reasons. This will also be our
            contribution to the Made in India programme, which encourages rural
            development. We will provide our consumers non-toxic, organic, less
            expensive, and less industrialised items.
          </p>
        </div>
      </div>
      <div className="team">
        <div className="member">
          <div className="pic">
            <img src={Ashna} alt="" className="mm" />
          </div>
          <div className="nameee">Ashna Singhal</div>
          <div className="position">CMO</div>
        </div>
        <div className="member">
          <div className="pic">
            <img src={Ananya} alt="" className="mm" />
          </div>
          <div className="nameee">Ananya Bhatnagar</div>
          <div className="position">COO</div>
        </div>
        <div className="member">
          <div className="pic">
            <img src={Ria} alt="" className="mm" />
          </div>
          <div className="nameee">Ria Kachhal</div>
          <div className="position">CHRO</div>
        </div>
        <div className="member">
          <div className="pic">
            <img src={Amogh} alt="" className="mm" />
          </div>
          <div className="nameee">Amogh Maheshwari</div>
          <div className="position">CFO</div>
        </div>
        <div className="member">
          <div className="pic">
            <img src={Anirudh} alt="" className="mm" />
          </div>
          <div className="nameee">Aniruddh Karpad</div>
          <div className="position">CPO</div>
        </div>
        <div className="member">
          <div className="pic">
            <img src={Vani} alt="" className="mm" />
          </div>
          <div className="nameee">Vani Katyal</div>
          <div className="position">CEO</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
