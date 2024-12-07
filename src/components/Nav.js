import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{width:"100%",paddingLeft:30,paddingRight:80, display:"flex", justifyContent:"space-between",margin:"auto", fontSize:18, backgroundColor:"#F7B5CA", height:"75px", alignItems:"center"}}>
        <div className="logo">
          <Link to={'/recipe/1'} style={{textDecoration:'none'}}> <h2  id="hh" style={{color:'black'}}>Atul's Special</h2></Link>
        </div>
        <div className="props">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Partners</li>
                <li>Contacts</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav