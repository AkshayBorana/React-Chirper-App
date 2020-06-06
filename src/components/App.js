import React, { Component } from 'react'
import { handleInitailaData } from '../actions/shared';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitailaData());
  }

  render() {
    return (
      <div>
        { this.props.loading === true
          ? null
          : <Dashboard />
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser} ) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)