import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div>
      <h1>What People Say</h1>

      <div class="content-slider">
        <div class="slider">
          <div class="mask">
            <ul>
              <li class="anim1">
                <div class="quote">
                  "I have truly fallen in love with the products offered by Saka
                  Organics, especially the body scrub , it does not only smell
                  divine, feel gorgeous but also has all the ingredients that is
                  very nourishing to my skin"
                </div>
                <div class="source">- Person</div>
              </li>
              <li class="anim2">
                <div class="quote">
                  Saka Organics' products are crafted with such love and care -
                  and you feel that when you use them! My hair has never felt
                  softer since I started using Saka's hair oil. The soaps -
                  especially the coffee scrub! - are fantastic. But what I love
                  the most about Saka is the thought that goes into recreating
                  traditional recipes and returning to a zero waste model of
                  production and sales!
                </div>
                <div class="source">- Another person</div>
              </li>
              <li class="anim3">
                <div class="quote">
                  Just when I was thinking to switch to soap bars from body
                  wash, I happened to try some of them from Saka Organics and
                  without any doubt, eucalyptus soap is my number 1, also for
                  the fact that it acts as a soap and a exfoliator worked great
                  for me :) and I highly recommend to anyone to try it atleast
                  once.
                </div>
                <div class="source">- Animal</div>
              </li>
              <li class="anim4">
                <div class="quote">Hello, this is a quote from a plant.</div>
                <div class="source">- Plant</div>
              </li>
              <li class="anim5">
                <div class="quote">How do ya like that.</div>
                <div class="source">- Cassidy</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
