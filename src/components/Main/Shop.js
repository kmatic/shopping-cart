import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import filterDuplicates from "../../utilities/filterDuplicates";
import styled from "styled-components";

const Shop = () => {
    const [bundles, setBundles] = useState([]);

    const fetchItems = async () => {
        const response = await fetch('https://valorant-api.com/v1/bundles');
        const info = await response.json();
        const filtered = filterDuplicates(info.data);

        console.log(filtered);
        setBundles(filtered);
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <ShopWrapper>
            {bundles.map(bundle => (
                <ShopItem
                    bundle={bundle}
                />
            ))}
        </ShopWrapper>
    );
}

const ShopWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    gap: 50px;
`;

export default Shop;