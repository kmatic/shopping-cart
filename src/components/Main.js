import Home from "./Main/Home";
import Shop from "./Main/Shop";
import { Routes, Route } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
            </Routes>
        </div>
    );
}

export default Main;