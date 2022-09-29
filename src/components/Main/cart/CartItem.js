import styled from "styled-components";

const CartItem = ({ item, onIncrease, onDecrease }) => {
    return (
        <CartItemWrapper>
            <img src={item.verticalPromoImage} alt={item.displayName} />
            <InfoWrapper>
                <h4>{item.displayName}</h4>
                <h4>${item.price * item.quantity}.00</h4>
                <QuantityWrapper>
                    <button id='minus' onClick={() => onDecrease(item.uuid)}>&minus;</button>
                    <h4>{item.quantity}</h4>
                    <button id='add' onClick={() => onIncrease(item.uuid)}>&#43;</button>
                </QuantityWrapper>
            </InfoWrapper>
        </CartItemWrapper>
    );
}

const CartItemWrapper = styled.div`
    display: flex;
    gap: 40px;

    > img {
        max-height: 500px;
        max-width: 100px;
    }
`;

const QuantityWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    > button {
        background: black;
        padding: 0 5px;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;

    > h4:nth-child(2) {
        font-weight: 400;
    }
`;

export default CartItem;