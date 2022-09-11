import style from "./TopBar.module.css"
import { NavLink } from "react-router-dom"
import { Search} from "../Search/Search"
export function TopBar() {
    
    return(
        <nav className={style.topBar}>
            <Search />
            
            
        </nav>
    )
}