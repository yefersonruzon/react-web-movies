import style from "./TopBar.module.css"
// import { useLocation } from "react-router-dom"
import { Search} from "../Search/Search"
// import { useState } from "react"
export function TopBar() {
    // var location = useLocation()
    // const [onInfo, setOnInfo] = useState(initialState);
    return(
        <nav className={style.topBar}>
            <Search />
        </nav>
    )
}