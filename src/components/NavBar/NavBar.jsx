import { NavLink } from "react-router-dom";
import "./NavBar.scss"
import Logo from "../../img/public/g.png"
// import { useState } from "react";


export function NavBar(){
    return(
        <nav className="NavBar">
                
                <div className="Logo">
                    <img  src={Logo} alt="#" className="img" />
                    <p>Movies</p>
                </div>
                
                <ul>
                    <li><b>Menu</b></li>
                    <li className="active"><NavLink to={"/"}><i className="ri-compass-line"></i><p>Discover</p></NavLink></li>
                    <li><NavLink to={"/movies"}><i className="ri-movie-2-line"></i>  <p>Movies</p></NavLink></li>
                    <li><NavLink to={"/shows"}><i className="ri-clapperboard-line"></i> <p>Series</p></NavLink></li>
                    <li><NavLink to={"/"}><i className="ri-coupon-3-fill"></i> <p>Premieres</p></NavLink></li>
                </ul>
                <ul>
                    <li><b>More</b></li>
                    <li><NavLink to={"/"}><i className="ri-star-smile-line"></i><p>Weekly top</p></NavLink></li>
                    <li><NavLink to={"/"}><i className="ri-heart-line"></i> <p>Favorites</p></NavLink></li>
                </ul>
                <div className="user"> 
                    <span className="UserImg"></span>
                    <p className="UserName">YefersonRuzon</p>
                    <span className="Btn">
                        <i className="ri-more-2-fill"></i>
                    </span>
                </div>
            </nav>
    )
} 