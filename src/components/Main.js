import Home from "./Main/Home";
import Shop from "./Main/shop/Shop";
import Cart from "./Main/cart/Cart";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const Main = ({
    randomBundle,
    onCartAdd,
    bundles,
    cart,
    total,
    onIncrease,
    onDecrease
}) => {
    return (
        <MainWrapper>
            <Routes>
                <Route path='/' element={<Home randomBundle={randomBundle}/>} />
                <Route path='/shop' element={<Shop onCartAdd={onCartAdd} bundles={bundles}/>} />
                <Route path='/cart' element={<Cart cart={cart} total={total} onIncrease={onIncrease} onDecrease={onDecrease}/>} />
            </Routes>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100%;
`;

export default Main;