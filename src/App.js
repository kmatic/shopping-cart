import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router} from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from "styled-components";

const App = () => {
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <Router>
      <Div>
        <Header />
        <Main />
      </Div>
    </Router>
  );
}

const Div = styled.div`
  height: 90vh;
`;



export default App;