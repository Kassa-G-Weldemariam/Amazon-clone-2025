import React from 'react'
import classes from './signUp.module.css'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.signInBtn}>Sign In</button>
        </form>
        <p>By signing-in you agree to the AMAZON CLONE FAKE Conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button className={classes.regisBtn}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default SignUp