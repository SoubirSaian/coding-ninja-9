import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Service/Service';
import Testimonials from './Testimonials/Testimonials';

function App() {
  return (
    <div>
      
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/service">
                <Service></Service>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/testimonials">
              <Testimonials></Testimonials>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
