import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'

import Home from '../pages/Home'
// about Vnergy
import Partners from '../pages/Partners'
import Company from '../pages/Company'
// Projects
import EngineeringList from '../pages/EngineeringList'
import EngineeringDetail from '../pages/EngineeringDetail'
import GreenEnergy from '../pages/GreenEnergy'

import TradingList from '../pages/TradingList'
import TradingDetail from '../pages/TradingDetail'

//Admin
import Login from '../pages/Login'
import Admin from '../pages/Admin'

// Contact
import Contact from '../pages/Contact'


const RoutesIP = () => {
    return (
        <Switch>
            <Route path='/' exact element={<Home />} />
            <Route path='/Home' exact element={<Home />} />

            {/* about Vnergy */}
            <Route path='/About/Company' exact element={<Company />} />
            <Route path='/About/Partners' exact element={<Partners />} />

            {/* projects */}
            <Route path='/Projects/Engineering' exact element={<EngineeringList />} />
            <Route path='/Projects/Engineering/:id' exact element={<EngineeringDetail />} />
            <Route path='/Projects/GreenEnergy' exact element={<GreenEnergy />} />
            <Route path='/Projects/Trading' exact element={<TradingList/>}/>
            <Route path='/Projects/Trading/:id' exact element={<TradingDetail/>}/>

            {/* Admin Page */}
            <Route path='/Login' exact element={<Login/>}/>
            <Route path='/Login/Admin' exact element={<Admin/>}/>

            {/* Contact */}
            <Route path='/Contact' exact element={<Contact />} />
        </Switch>
    )
}

export default RoutesIP;
