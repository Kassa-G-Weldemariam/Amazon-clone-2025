import React from 'react'
import { FadeLoader } from 'react-spinners'
function Loader() {
  return (
    <div style={
        {display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"30vh"
        }}>
        <FadeLoader color="#1717efff"/>
    </div>
  )
}

export default Loader