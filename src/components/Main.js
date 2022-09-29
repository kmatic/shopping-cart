import Home from "./Main/Home";
import Shop from "./Main/shop/Shop";
import Cart from "./Main/cart/Cart";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import { useState, useEffect } from 'react';

const Main = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const sumTotal = () => {
        const sum = cart.reduce((previous, current) => {
            return previous + (current.price * current.quantity);
        }, 0);

        setTotal(sum);
    }

    const onCartAdd = (newItem) => {
        const found = cart.find(item => item.uuid === newItem.uuid);

        if (found) {
            setCart(() => {
                let updatedCart = cart.map(item => {
                    if (item.uuid === newItem.uuid) {
                        return {...found, quantity: found.quantity + 1};
                    }
                    return item;
                });

                return updatedCart;
            });
        } else {
            setCart(() => {
                return [...cart, {...newItem, quantity: 1}];
            });
        }

        // console.log(cart);
    }

    useEffect(() => {
        sumTotal();
    });

    return (
        <MainWrapper>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop onCartAdd={onCartAdd}/>} />
                <Route path='/cart' element={<Cart cart={cart} total={total}/>} />
            </Routes>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
    padding: 3rem;
`;

export default Main;