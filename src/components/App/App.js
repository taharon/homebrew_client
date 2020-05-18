import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import NewBrew from '../BrewRoutes/NewBrew'
import ViewBrews from '../BrewRoutes/ViewBrews'
import ViewABrew from '../BrewRoutes/ViewABrew'
// import SideHeader from '../Header/SideHeader'

const FullPage = styled.div`
width: 100%;
height: 100%;
display: flex;
flexWrap: wrap;
`
const mainPage = styled.main`
width: 80%;
backgroundImage: url(../../../public/background_beer.jpg);
`

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <FullPage>
        <Header style={{ width: '20%' }} user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <mainPage >
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/new-brew' render={() => (
            <NewBrew user={user} msgAlert={this.msgAlert}/>
          )} />
          <AuthenticatedRoute user={user} path='/view-brews' render={() => (
            <ViewBrews user={user} msgAlert={this.msgAlert}/>
          )} />
          <AuthenticatedRoute user={user} path='/view-a-brew/:id' render={() => (
            <ViewABrew user={user} msgAlert={this.msgAlert}/>
          )} />
        </mainPage>
      </FullPage>
    )
  }
}

export default App
