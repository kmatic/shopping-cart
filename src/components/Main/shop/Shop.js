import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import filterDuplicates from "../../../utilities/filterDuplicates";
import generatePrice from "../../../utilities/generatePrice";
import styled from "styled-components";

const Shop = ({ onCartAdd }) => {
    const [bundles, setBundles] = useState([]);

    const fetchBundles = async () => {
        const response = await fetch('https://valorant-api.com/v1/bundles');
        const info = await response.json();
        const filtered = filterDuplicates(info.data);
        const filteredWithPrice = generatePrice(filtered);

        console.log(filteredWithPrice);
        setBundles(filteredWithPrice);
    }

    useEffect(() => {
        fetchBundles();
    }, []);

    return (
        <ShopWrapper>
            {bundles.map(bundle => (
                <ShopItem
                    key={bundle.uuid}
                    bundle={bundle}
                    onCartAdd={onCartAdd}
                />
            ))}
        </ShopWrapper>
    );
}

const ShopWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    gap: 50px;
    justify-items: center;
    align-items: center;
    width: 100%;
`;

export default Shop;