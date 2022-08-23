import React from "react";
import "./Whatsapp.css";
import Whatsappp from "../Images/wtsapp.svg";

function Whatsapp() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="alll">
      <div class="form">
        <div class="title">Contact Team</div>
        <div class="subtitle">How can we help you?</div>
        <div class="input-container ic1">
          <input id="firstname" class="input" type="text" placeholder="Name" />
        </div>
        <div class="input-container ic2">
          <input id="lastname" class="input" type="text" placeholder="Email " />
        </div>
        <div class="input-container ic2">
          <input
            id="Message"
            class="input"
            type="text"
            placeholder="Message "
          />
        </div>
        <button type="text" class="submit" onClick={refreshPage}>
          submit
        </button>{" "}
        <div className="wts">
          <a href="tel:+918273651151" target="_blank">
            <img
              src={Whatsappp}
              width={100}
              height={100}
              alt="fb"
              className="imge"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Whatsapp;
