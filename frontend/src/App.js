import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Login from './pages/Login';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import Product from './components/Product';
import AddProduct from './admin/AddProduct';
import ShoppingCart from './components/ShoppingCart';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './components/NotFound';
import EditProduct from './admin/EditProduct';
import React, { Component, useContext } from 'react';
import About from './pages/about/About';
import { Context } from './context/Context';
import Settings from './pages/settings/Settings';
import History from './admin/History';



const App = () => {
  const { user } = useContext(Context)

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/shop" >
            <Shop />
          </Route>
          <Route path="/product" >
            <Product />
          </Route>
          <Route path="/login" >
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/registration" >
            {user ? <Home /> : <RegistrationForm />}
          </Route>
          <Route path="/add" >
            {user?.role === 'admin' ? <AddProduct /> : <Home />}
          </Route>
          <Route path="/edit">
            {user?.role === 'admin' ? <EditProduct /> : <Home />}
          </Route>
          <Route path="/basket" >
            {user ? <ShoppingCart /> : <Home />}
          </Route>
          <Route path="/profile" >
            {user ? <Settings /> : <Home />}
          </Route>
          <Route path="/forgotPassword" >
            {user ? <ForgotPassword /> : <Home />}
          </Route>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/history" >
            {user?.role === 'admin' ? <History /> : <Home />}
          </Route>
          <Route path="/*" >
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
