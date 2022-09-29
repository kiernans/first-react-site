import React from "react";
import image from "../images/raccoon5.jpg";

const Login = () => {
  return (
    <>
      <figure>
        <img
          src={image}
          id="login-pic"
          alt="Raccoon praises the sun"
          title="Stretchy boy raccoon reaches for the stars"
        />
        <figcaption> Raccoon reaches for the &#x1f31e;</figcaption>
      </figure>
      <form id="frm1">
        <label className="login" htmlFor="email">
          Email:
          <input type="email" id="email" required />
        </label>
        <label className="login" htmlFor="password">
          Password:
          <input type="password" id="password" required />
        </label>
        <input type="submit" value="Login" id="button" />
      </form>
    </>
  );
};

export default Login;
