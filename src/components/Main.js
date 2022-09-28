import Home from "./Main/Home";
import Shop from "./Main/Shop";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const Main = () => {
    return (
        <MainWrapper>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
            </Routes>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
    padding: 3rem;
`;

export default Main;