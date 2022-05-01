import React from "react";
import { Routes, Route, HashRouter as Router} from 'react-router-dom';
import Layout from "@containers/Layout";
import Login from "@containers/Login";
import RecoveryPassWord from "@containers/RecoveryPassword";
import NotFound from '../pages/NotFound';
import CreateAccount from "@containers/CreateAccount";
import EmailSent from "@containers/EmailSent";
import EditAccount from "@containers/EditAccount";
import MyOrders from "@containers/MyOrders";
import '@styles/global.css';
import '@styles/_vars.css';
import MyOrder from "@containers/MyOrder";
import CheckoutItem from "@components/CheckoutItem";
import Home from "../pages/Home"
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitilalState";
const App = () => {
    const initialState = useInitialState();
    return(
    <AppContext.Provider value={initialState}>
   <Router>
   <Layout>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={< Login />} />
            <Route exact path="/recovery-password" element={< RecoveryPassWord/>} />
            <Route exact path="/create-account" element={<CreateAccount />} />
            <Route exact path="/email-sent" element={<EmailSent />} />
            <Route path="/my-account" element={<EditAccount />} />
            <Route path="my-order" element={<MyOrder><CheckoutItem /></MyOrder>}/>
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </Layout>
    </Router>
    </AppContext.Provider>
    );
}


export default App;