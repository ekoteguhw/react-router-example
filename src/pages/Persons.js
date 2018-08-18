import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ListPerson, Person } from '../components'

const Persons = () => (
  <Switch>
    <Route exact path="/persons" component={ListPerson} />
    <Route path="/persons/:id" component={Person} />
  </Switch>
)

export default Persons
