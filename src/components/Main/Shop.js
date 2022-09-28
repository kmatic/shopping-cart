import { useEffect, useState } from "react";
import ShopItems from "./ShopItems";
import filterDuplicates from "../../utilities/filterDuplicates";

const Shop = () => {
    const [bundles, setBundles] = useState([]);

    const fetchItems = async () => {
        const response = await fetch('https://valorant-api.com/v1/bundles');
        const info = await response.json();
        const filtered = filterDuplicates(info.data);
        setBundles(filtered);
        console.log(filtered);
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Shop</h1>
            {bundles.map(bundle => {
                return (
                    <h2>{bundle.displayName}</h2>
                );
            })};
        </div>
    );
}

export default Shop;