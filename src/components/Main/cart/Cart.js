import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = ({ cart, total, onIncrease, onDecrease }) => {
    return (
        <CartWrapper>
            <h2>Your Cart</h2>
            <Div>
                {cart.length === 0 &&
                    <div>Cart is Empty</div>
                }
                {cart.map(item => (
                    <CartItem
                        item={item}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                    />
                ))}
            </Div>
            <h2>Total: ${total}.00</h2>
            <button>Checkout</button>
            <button>Continue shopping</button>
        </CartWrapper>
    );
}

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default Cart;