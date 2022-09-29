import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router} from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <Router>
      <div>
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;