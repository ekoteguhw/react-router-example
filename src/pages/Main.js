import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Persons, About } from './index'

const Main = () => (
  <main>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/persons" component={Persons} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </main>
)

export default Main
