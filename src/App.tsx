import Routers from './routers';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import { GlobalStyle } from 'configs/globalStyled';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
