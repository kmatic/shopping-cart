import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

const Header = () => {
    return (
            <NavWrapper>
                <StyledLink to='/'>
                    <img src={logo} alt='logo' />
                    <h1>ValBundles</h1>
                </StyledLink>
                <ul>
                    <StyledLink to='/'>
                        <li>Home</li>
                    </StyledLink>
                    <StyledLink to='/shop'>
                        <li>Shop</li>
                    </StyledLink>
                    <StyledLink to='/cart'>
                        <li>Cart (0)</li>
                    </StyledLink>
                </ul>
            </NavWrapper>
    );
}

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--dark);
    padding: 1.6rem 3rem;

    > ul {
        display: flex; 
        align-items: center;
        gap: 70px;
        list-style: none;
    }

    li {
        color: white;
        font-size: 1.3rem;
    }

    h1 {
        font-size: 3.5rem;
        color: var(--val-red);
    }

    img {
        height: 70px;
        width: 120px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
`;

export default Header;