import React from "react";

const Membership = () => {
  return (
    <>
      <header>
        <h1> Create an Account </h1>
      </header>
      <main>
        <form id="Apply">
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" minLength="1" maxLength="20" required />
          </label>

          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" minLength="1" maxLength="50" required />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" name="password" minLength="1" maxLength="20" required />
          </label>
          <label htmlFor="choice">
            Favorite Raccoon Trait:
            <select name="choice" id="choice">
              <option value="Chubby">Chubby</option>
              <option value="Fluffy">Fluffy</option>
              <option value="Conniving">Conniving</option>
              <option value="Friendly">Friendly</option>
            </select>
          </label>
          <label htmlFor="comments">
            How did you hear about us?
            <textarea id="comments" name="comments" cols="30" rows="6" />
          </label>
          <button type="submit" id="button">
            Create Account
          </button>
        </form>
      </main>
    </>
  );
};

export default Membership;
