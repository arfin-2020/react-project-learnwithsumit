import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-bg.png';
import Account from "./Account";
import classesName from './style/Nav.module.css';
const Nav = () => {
    return (

        <nav className={classesName.nav}>
            <ul>
                <li>
                    <Link to ="/" className={classesName.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account/>
        </nav>

    )
}

export default Nav;