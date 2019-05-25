import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import BuyItem from './pages/BuyItem'
import Join from './pages/Join'
import ViewProfile from './pages/ViewProfile'
import Sell from './pages/Sell'
import Login from './pages/Login'
import Donate from './pages/Donate'
import Cart from './pages/Cart'

const Router = () => (
    <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route path = "/join"  component = { Join } />
        <Route path = "/view-profile"  component = { ViewProfile } />
        <Route path = "/sell"  component = { Sell } />
        <Route path = "/buy"  component = { BuyItem } />
        <Route path = "/login" component = { Login } />
        <Route path = "/donate" component = { Donate } />
        <Route path = "/cart" component = { Cart } />
    </Switch>

)

export default Router;