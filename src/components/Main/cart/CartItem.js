import styled from "styled-components";

const CartItem = ({ item }) => {
    return (
        <CartItemWrapper>
            <img src={item.verticalPromoImage} alt={item.displayName} />
            <div>
                <h4>{item.displayName}</h4>
                <h4>{item.price}</h4>
                <div>
                    <div>&minus;</div>
                    <h4>{item.quantity}</h4>
                    <div>&#43;</div>
                </div>
            </div>
        </CartItemWrapper>
    );
}

const CartItemWrapper = styled.div`
    display: flex;
    gap: 20px;

    > img {
        max-height: 240px;
        max-width: 120px;
    }
`;

export default CartItem;