import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router} from 'react-router-dom';

const App = () => {
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