import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductListFunctional from "./components/componentList/productlistF.component";
import UsersFunctional from "./components/users/users.functional";
import UserDetails from "./components/userdetails/UserDetails.component";
import ProductDetails from "./components/productDetails/ProductDetails.component";
import NewProduct from "./components/newProduct/NewProduct.component";
import Dashboard from "./components/dashboard/Dashboard.component";
import Account from "./components/dashboard/Account.component";
import Profile from "./components/dashboard/Profile.component";
import Auth from "./components/auth/Auth.component";
import SignIn from "./components/auth/SignIn.component";
import SignUp from "./components/auth/SignUp.component";
import Error from "./components/error/Error.component";
import AdvanceUsers from "./components/advanceuser/AdvanceUsers.component";
import NewProductWithReactHookForm from "./components/newProductReactHookForm/NewProductReactHookForm";
class App extends React.Component {

  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Pubkart
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/new-product" className="nav-link">
                    New Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/users" className="nav-link">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login/signin" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/advance-users" className="nav-link">
                    Modified Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<ProductListFunctional />}></Route>
            <Route path="/new-product" element={<NewProductWithReactHookForm />}></Route>
            <Route path="/users" element={<UsersFunctional />}></Route>
            <Route path="/user-details/:userid" element={<UserDetails />}></Route>
            <Route path="/advance-users" element={<AdvanceUsers />}>
              <Route path=":userid" element={<UserDetails />}></Route>
            </Route>
            <Route path="/product-details/:productid" element={<ProductDetails />}></Route>
            {/* Nested Routes */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="account" element={<Account />}></Route>
              <Route path="profile" element={<Profile />}></Route>
            </Route>
            <Route path="/login" element={<Auth />}>
              <Route path="signin" element={<SignIn />}></Route>
              <Route path="signup" element={<SignUp />}></Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;