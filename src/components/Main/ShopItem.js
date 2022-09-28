import styled from "styled-components";

const ShopItem = ({ bundle }) => {
    return (
        <Div>
            <img src={bundle.verticalPromoImage} alt={bundle.displayName} />
            <div>
                <h3>{bundle.displayName}</h3>
                <button>Add to cart</button>
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
        max-height: 4000px;
        max-width: 280px;
        margin-top: -1px;
    }

    > div {
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 15px;
    }

    > div > button {
        padding: 10px 25px;
        background: var(--dark);
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
`;

export default ShopItem;