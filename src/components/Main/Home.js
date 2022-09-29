import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = ({ randomBundle }) => {
    return (
        <HomeWrapper src={randomBundle.displayIcon}>
            <h1>Waste your money on Valorant skins Here!</h1>
            <h1>{randomBundle.displayName} now available!</h1>
            <Button>
                <StyledLink to='/shop'>SHOP NOW</StyledLink>
            </Button>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: white;
    background-image: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;

    animation: fadeIn ease 2s;
    
    @keyframes fadeIn {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }
`;

const Button = styled.button`
    padding: 10px 40px;
    font-size: 1.2rem;
    font-weight: bold;
    background: white;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export default Home;