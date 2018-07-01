import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import PlacePrices from './PlacePrices'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/place_prices' component={PlacePrices}/>
    </Switch>
  </main>
)

export default Main
