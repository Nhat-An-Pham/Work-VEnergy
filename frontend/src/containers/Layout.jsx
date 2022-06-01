import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RoutesIP from '../routes/RoutesIP';
// import Home from '../pages/Home';


function Layout() {
  return (
    <BrowserRouter>
      <div className='layout__container'>
        <header className='layout__navbar' >
          <Navbar />
        </header>
        <div className='layout__body'>
          <RoutesIP>
            <Route render={props => (
              <RoutesIP />
            )} />
          </RoutesIP>
        </div>
        <div className='layout__footer'>
          <Footer />
        </div>
      </div>
      {/* <Home /> */}
    </BrowserRouter>
  );
}

export default Layout;
