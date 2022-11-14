import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.scss"
import Logo from "../../img/public/g.png"
import { useState, useEffect } from "react";
// import { useState } from "react";    


export function NavBar(){
    
    let location = useLocation();
    const [homePage, sethomePage] = useState(false);
    const [moviesPage, setMoviesPage] = useState(false);
    const [seriesPage, setseriesPage] = useState(false);
    const [premieres, setPremieres] = useState(false);
    const [weekly, setWeekly] = useState(false);

    console.log(location.pathname)
    useEffect(() => {
        if(location.pathname === "/"){
            sethomePage(true)
        }else if(location.pathname.substring(0,9) === "/discover"){
            sethomePage(true)
        }
        else sethomePage(false)

        if(location.pathname.substring(0,7) === "/movies"){
            setMoviesPage(true)
        }else setMoviesPage(false)

        if(location.pathname.substring(0,6) === "/shows"){
            setseriesPage(true)
        }else setseriesPage(false)

        if(location.pathname.substring(0,10) === "/premieres"){
            setPremieres(true)
        }else setPremieres(false)

        if(location.pathname.substring(0,10) === "/weeklytop"){
            setWeekly(true)
        }else setWeekly(false)
      }, [location]);
    return(
        <nav className="NavBar">
                
            <NavLink to={"/"} className="Logo">
                <img  src={Logo} alt="#" className="img" />
                <p>Movies</p>
            </NavLink>
            
            <ul>
                <li><b>Menu</b></li>
                <li className={homePage ? "active" : ""}><NavLink to={"/"}><i className="ri-compass-line"></i><p>Discover</p></NavLink></li>
                <li className={moviesPage ? "active" : ""}><NavLink to={"/movies"}><i className="ri-movie-2-line"></i>  <p>Movies</p></NavLink></li>
                <li className={seriesPage ? "active" : ""}><NavLink to={"/shows"}><i className="ri-clapperboard-line"></i> <p>Series</p></NavLink></li>
                <li className={premieres ? "active" : ""}><NavLink to={"/premieres"}><i className="ri-coupon-3-fill"></i> <p>Premieres</p></NavLink></li>
            </ul>
            <ul>
                <li><b>More</b></li>
                <li className={weekly ? "active" : ""}><NavLink to={"/weeklytop"}><i className="ri-star-smile-line"></i><p>Weekly top</p></NavLink></li>
                <li className="disable"><span><i className="ri-heart-line"></i> <p>Favorites</p>  </span></li>
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