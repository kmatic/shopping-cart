import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
            <NavWrapper>
                <StyledLink to='/'>
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
                        <li>Cart</li>
                    </StyledLink>
                </ul>
            </NavWrapper>
    );
}

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--dark);
    padding: 3rem;

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
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default Header;