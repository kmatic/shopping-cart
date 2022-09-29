import styled from "styled-components";

const ShopItem = ({ bundle, onCartAdd }) => {
    return (
        <Div>
            <img src={bundle.verticalPromoImage} alt={bundle.displayName} />
            <div>
                <h3>{bundle.displayName}</h3>
                <h4>${bundle.price}.00</h4>
                <button onClick={() => onCartAdd(bundle)}>Add to cart</button>
            </div>
        </Div>
    );
}

const Div = styled.div`
    width: 280px;
    height; 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 1px solid gray;

    > img {
        max-height: 400px;
        max-width: 280px;
        margin-top: -1px;
    }

    > div {
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 10px;
    }

    > div > button {
        padding: 8px;
        background: var(--dark);
        color: white;
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    h4 {
        font-weight: 400;
    }
`;

export default ShopItem;