import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { connectToWeb3 } from './actions/web3'
import { metamaskIsLoggedInSelector, metamaskIsLoggingInSelector } from './selectors/metamask'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {

  componentWillMount() {
    this.props.connectToWeb3()
  }

  render() {
    // if (this.props.connected){
    //   if (this.props.web3NetworkError){
    //     return (
    //       <div className="App">
    //       <nav className="navbar pure-menu pure-menu-horizontal">
    //           <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
    //       </nav>
  
    //       <main className="container">
    //         <div className="pure-g">
    //           <div className="pure-u-1-1">
    //             <p>Oops, you’re on the wrong network</p>
    //             <p>Simply open MetaMask and switch over to the Main Ethereum Network.</p>
    //           </div>
    //         </div>
    //       </main>
    //     </div>
    //     )
    //   }
    //   return (
    //     <div className="App">
    //       <nav className="navbar pure-menu pure-menu-horizontal">
    //           <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
    //       </nav>
  
    //       <main className="container">
    //         <div className="pure-g">
    //           <div className="pure-u-1-1">
    //             {
    //               this.state.firstAccount === '0xb185e019f3164386c9d8c94bcb734e70010b7e2e'
    //               ? <div>
    //                 <p>You have an account on our platform !</p>
    //               </div>
    //               : <div>
    //                 {/*Good network but no account*/}
    //                 {/*Associate a mail and a nickname to that account*/}
    //                 <p>Wallet address:</p>
    //                 <p>{this.state.firstAccount}</p>
    //               </div>
    //             }
    //           </div>
    //         </div>
    //       </main>
    //     </div>
    //   );
    // }
    if (this.props.metamaskLoggedIn){
      return(
        <div>You are logged in Metamask</div>
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
  metamaskLoggingIn: metamaskIsLoggingInSelector(state.web3)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  connectToWeb3,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
