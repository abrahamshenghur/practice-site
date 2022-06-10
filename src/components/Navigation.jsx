import React from "react";
import {  Outlet, Link, NavLink } from "react-router-dom";

const styles = {
    topImage: {
      backgroundImage: `url( ${'https://www.friendsgreenporsche.com/wp-content/uploads/2021/11/IMG_6873b-e1637315268680.jpg'} )`, 
      height:'200px', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
    },
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  }
  
const Header = () => {
    return (
      <div className="flex-container">
        <div className="child1">
          <Link to="/home">
            <img style={{height: 50}} src="https://www.friendsgreenporsche.com/wp-content/themes/fgp/assets/img/logo.png" ></img>
          </Link>
        </div>
        <div className="child2">Contact</div>
        <div className="child3">Social Media</div>
      </div>
    )
  }

const NavBar = () => {
    return (
      <nav  className="flex-container navStyle">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    )
  }

  const TopImage = () => {
    return (
      <div style={ styles.topImage }>
        <div className="flex-container" style={ styles.content }>
          <h2 style={{position: 'relative', top: 50, left: -50, right: 0, bottom: 0, }}  className="textColorWhite">
            THE BEST CARS MONEY CAN BUY
          </h2>
        </div>
      </div>
    )
  }
  

function Navigation() {
    return (
        <div className="navigation">
                  <Header/>

                  <NavBar />

                  <TopImage />
                  <Outlet />



        </div>
    );
}

export default Navigation