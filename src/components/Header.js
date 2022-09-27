import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <h1>Valorant Logo</h1>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/shop'>
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Header;