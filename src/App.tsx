import Routers from './routers';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import { GlobalStyle } from 'configs/globalStyled';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
