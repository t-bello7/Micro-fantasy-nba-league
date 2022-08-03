import { NavLink, useNavigate } from "react-router-dom"
import '../assets/styles/Navbar.scss'

const Navbar = () => {
    let navigate = useNavigate()
    return (
        <nav className="container nav__container">
            <button onClick={ () => navigate(-1)}> <img src="/icon/left-arrow.svg" alt="left-icon" className="icon"/> </button>
                <h1> NBA Team Stats </h1>
            <button>  <img src="/icon/filter.svg" alt="filter-icon" className="icon"/> </button>
           
        </nav>
    )
}
export default Navbar