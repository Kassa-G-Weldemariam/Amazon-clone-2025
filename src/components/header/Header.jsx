import React from 'react'
import classes from './header.module.css'
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LowerHeader from "./LowerHeader";
function Header() { 
  return (
    <>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <a href="/">
            <img
              src="https://pngimg.com/d/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
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
          <SearchOutlinedIcon size={25} />
        </div>
        {/* right side link */}
        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/1920px-Flag_of_the_United_States_%28Web_Colors%29.svg.png"
              alt="flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>
          <a href="">
            <div>
              <p> Hello, Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          <a href="">
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </a>
          <a href="" className={classes.cart}>
            <span>0</span>
            <ShoppingCartOutlinedIcon size={35} />
          </a>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header