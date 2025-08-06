import React, {useContext} from 'react'
import classes from './header.module.css'
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LowerHeader from "./LowerHeader";
import { Link } from 'react-router-dom'
import { DataContext } from '../dataProvider/DataProvider.jsx';
import {auth} from '../../utility/firebase.js'
function Header() { 

  const [{user, basket}, dispatch]=useContext(DataContext);
  const totalItems= basket?.reduce((amount, item) =>( item.amount + amount), 0);
  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/d/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className={classes.delivery}>
            {/* delivery */}
            <span>
              <FmdGoodOutlinedIcon />
            </span>
            <div>
              <p>delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={classes.search}>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Product" />
          <SearchOutlinedIcon size={50} />
        </div>
        {/* right side link */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/1920px-Flag_of_the_United_States_%28Web_Colors%29.svg.png"
              alt="flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          <Link to={!user && "/Auth"}>
            <div>
              <div>
                {user ? (
                    <>
                      <p>Hello, {user?.email?.split("@")[0]}</p> 
                      <span onClick={()=>{auth.signOut()}}>sign Out</span>
                    </>):(
                    <>
                      <p> Hello, Sign In</p>
                      <span>Account & Lists</span>
                    </> )
                }
              </div>
            </div>
          </Link>
          <Link to="/orders">
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <span>{totalItems}</span>
            <ShoppingCartOutlinedIcon size={35} />
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header