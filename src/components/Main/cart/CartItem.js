import styled from "styled-components";

const CartItem = ({ item, onIncrease, onDecrease }) => {
    return (
        <CartItemWrapper>
            <img src={item.verticalPromoImage} alt={item.displayName} />
            <div>
                <h4>{item.displayName}</h4>
                <h4>${item.price * item.quantity}.00</h4>
                <QuantityWrapper>
                    <div id='minus' onClick={() => onDecrease(item.uuid)}>&minus;</div>
                    <h4>{item.quantity}</h4>
                    <div id='add' onClick={() => onIncrease(item.uuid)}>&#43;</div>
                </QuantityWrapper>
            </div>
        </CartItemWrapper>
    );
}

const CartItemWrapper = styled.div`
    display: flex;
    gap: 20px;

    > img {
        max-height: 500px;
        max-width: 120px;
    }
`;

const QuantityWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

export default CartItem;