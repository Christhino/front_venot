import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Versement from '../pages/Products'
import Retrait from '../pages/Retrait'
const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/client' component={Customers}/>
            <Route path='/versement'component={Versement}/>
            <Route path='/retrait' component={Retrait}/>
        </Switch>
    )
}

export default Routes
