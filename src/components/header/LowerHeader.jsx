import React from 'react'
import classes from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
function LowerHeader() {
  return (
    <>
    <div className={classes.lower_container}>
      <ul>
        <li>
          <MenuIcon />
          <span>All</span>
        </li>
        <li>Today's Deals</li>
        <li>Registry</li>
        <li>Prime Video</li>
        <li>Gift Cards</li>
        <li>Customer Service</li>
        <li>Sell</li>
      </ul>
    </div>
    </>
  );
}

export default LowerHeader
