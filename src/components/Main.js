import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Roster from './Roster'
import Schedule from './Schedule'

const Main = () => (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/roster' component={Roster}/>
        <Route exact path='/schedule' component={Schedule}/>
      </Switch>
)

export default Main
