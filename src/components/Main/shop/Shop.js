import ShopItem from "./ShopItem";
import styled from "styled-components";

const Shop = ({ onCartAdd, bundles }) => {
    return (
        <ShopWrapper>
            {bundles.map(bundle => (
                <ShopItem
                    key={bundle.uuid}
                    bundle={bundle}
                    onCartAdd={onCartAdd}
                />
            ))}
        </ShopWrapper>
    );
}

const ShopWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    gap: 50px;
    justify-items: center;
    align-items: center;
    width: 100%;
    padding: 2rem 3rem;

    animation: fadeIn linear 1s;
    
    @keyframes fadeIn {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }
`;

export default Shop;