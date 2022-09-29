import Home from "./Main/Home";
import Shop from "./Main/shop/Shop";
import Cart from "./Main/cart/Cart";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import filterDuplicates from "../utilities/filterDuplicates";
import generatePrice from "../utilities/generatePrice";

const Main = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [bundles, setBundles] = useState([]);
    const [randomBundle, setRandomBundle] = useState({});

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

    const fetchRandomBundle = async () => {
        const response = await fetch('https://valorant-api.com/v1/bundles');
        const info = await response.json();
        const filtered = filterDuplicates(info.data);
        let rand = Math.floor(Math.random() * filtered.length);

        setRandomBundle(filtered[rand]);
    }

    const fetchBundles = async () => {
        const response = await fetch('https://valorant-api.com/v1/bundles');
        const info = await response.json();
        const filtered = filterDuplicates(info.data);
        const filteredWithPrice = generatePrice(filtered);

        setBundles(filteredWithPrice);
    }

    useEffect(() => {
        fetchRandomBundle();
        fetchBundles();
    }, []);

    useEffect(() => {
        sumTotal();
    });

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