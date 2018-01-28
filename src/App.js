import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connectToWeb3 } from './actions/web3'
import { metamaskIsLoggedInSelector } from './selectors/metamask'
import { web3NetworkIsConnectedSelector } from './selectors/web3Network'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {

  componentWillMount() {
    this.props.connectToWeb3()
  }

  render() {
    if (this.props.spinner) {
      return(
        <div>Spinner</div>
      )
    }
    if (this.props.metamaskLoggedIn){
      if (this.props.web3NetworkIsConnected) {
        return(
          <div>You are logged in Metamask</div>
        )
      }
      return(
        <div>Be sure to be on the good network</div>
      )
    }
    return (
      <div>Be sure to be logged in Metamask</div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  metamaskLoggedIn: metamaskIsLoggedInSelector(state.web3),
  web3NetworkIsConnected: web3NetworkIsConnectedSelector(state.web3),
  spinner: state.web3.spinner
})

const mapDispatchToProps = dispatch => bindActionCreators({
  connectToWeb3,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
