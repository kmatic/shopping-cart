import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = ({ cart, total }) => {
    return (
        <CartWrapper>
            <h2>Your Cart</h2>
            <div>
                {cart.length === 0 &&
                    <div>Cart is Empty</div>
                }
                {cart.map(item => (
                    <CartItem
                        item={item}
                    />
                ))}
            </div>
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

export default Cart;