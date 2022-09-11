import { NavLink } from "react-router-dom";
import "./NavBar.scss"
import Logo from "../../img/public/g.png"
import { useState } from "react";


export function NavBar(){
    return(
        <nav className="NavBar">
                
                <div className="Logo">
                    <img  src={Logo} alt="#" className="img" />
                    <p>Movies</p>
                </div>
                
                <ul>
                    <li><b>Menu</b></li>
                    <li className="active"><i className="ri-compass-line"></i><p>Discover</p></li>
                    <li><i className="ri-movie-2-line"></i>  <p>Movies</p></li>
                    <li><i className="ri-clapperboard-line"></i> <p>Series</p></li>
                    <li><i className="ri-coupon-3-fill"></i> <p>Premieres</p></li>
                </ul>
                <ul>
                    <li><b>More</b></li>
                    <li><i className="ri-star-smile-line"></i><p>Weekly top</p></li>
                    <li><i className="ri-heart-line"></i> <p>Favorites</p></li>
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