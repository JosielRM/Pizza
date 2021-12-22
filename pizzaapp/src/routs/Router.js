import React from 'react'
import { BrowserRouter, Switch  } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import Menu from '../pages/Menu/Menu'


const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Router exact path="/">
                <HomePage/>
            </Router>
            <Router exact path="menu">
                <Menu/>
            </Router>
        </Switch>
        </BrowserRouter>
    )
}
export default Router