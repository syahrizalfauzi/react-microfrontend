import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav>
            navbar
            <ul>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
