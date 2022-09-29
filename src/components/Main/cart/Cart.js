import CartItem from "./CartItem";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = ({ cart, total, onIncrease, onDecrease }) => {
    return (
        <CartWrapper>
            <h2>Your Cart</h2>
            <Div>
                {cart.length === 0 &&
                    <div>Your cart is empty :(</div>
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
            <Button primary>Checkout</Button>
            <Button>
                <StyledLink to='/shop'>Continue shopping</StyledLink>
            </Button>
            
        </CartWrapper>
    );
}

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 50%;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: white;
    padding: 20px 40px;
    border-radius: 5px;
    height: 550px;
    overflow-y: auto;
`;

const Button = styled.button`
    width: 50%;
    padding: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    background: ${props => props.primary? 'lightgreen' : 
        'lightcoral'};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

export default Cart;