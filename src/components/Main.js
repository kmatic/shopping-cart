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
    }

    const onIncrease = (uuid) => {
        const updatedQuantity = cart.map(item => {
            if (item.uuid === uuid) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });

        setCart(updatedQuantity);
    }

    const onDecrease = (uuid) => {
        const updatedQuantity = cart.map(item => {
            if (item.uuid === uuid) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        });

        const filteredQuantity = updatedQuantity.filter(item => item.quantity > 0); // checks for 0 quantity and removes

        setCart(filteredQuantity);
    }

    useEffect(() => {
        sumTotal();
    });

    return (
        <MainWrapper>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop onCartAdd={onCartAdd}/>} />
                <Route path='/cart' element={<Cart cart={cart} total={total} onIncrease={onIncrease} onDecrease={onDecrease}/>} />
            </Routes>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
    padding: 2rem 3rem;
    display: flex;
    justify-content: center;
`;

export default Main;