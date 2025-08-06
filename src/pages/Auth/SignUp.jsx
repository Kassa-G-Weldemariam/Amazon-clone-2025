import React, {useState, useContext} from 'react';
import classes from './signUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../../utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {DataContext} from '../../components/dataProvider/DataProvider';
import { Type } from '../../utility/action.type';
import { ClipLoader } from 'react-spinners';

function SignUp() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError]=useState("");
  const [{user}, dispatch]=useContext(DataContext);
  const [loading, setLoading]=useState({signin:false, signup:false})
  const navigate=useNavigate()
  // console.log(user)
  const authHandler=(e)=>{
    e.preventDefault() 
      if (e.target.name == "signin") {
        setLoading({...loading, signin:true})
        signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type:Type.SET_USER,
            user:userInfo.user
          })
          setLoading({...loading, signin:false})
          navigate("/")
        })
        .catch((error) => {
          setError(error.message);
          setLoading({...loading, signin:false})
        });
      } else {
        setLoading({...loading, signup:true})
        createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({...loading, signup:false})
          navigate("/")
        })
        .catch((error)=>{
          setError(error.message)
          setLoading({ ...loading, signup: false });       
         })
          
      }
    }

  return (
    <section className={classes.login}>
      <Link to={"/"}>
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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            name="signin"
            type="submit"
            onClick={authHandler}
            className={classes.signInBtn}
          >
            {loading.signin ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON CLONE FAKE Conditions of use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          name="signup"
          type="submit"
          onClick={authHandler}
          className={classes.regisBtn}
        >
          {loading.signup ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ Padding: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default SignUp