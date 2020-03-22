import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './Actions/action';

class App extends Component {

  render() {    
    return (
      <div className="App">
        <div className="page-title">Redux-Thunk MiddleWare Tutorial</div>
        <code>
          {this.props.loading ? 'LOADING...' : JSON.stringify(this.props)}
        </code>
        <button className="btn btn-primary" onClick={this.props.onAgeDown}>Age Down</button>
        <button className="btn btn-primary" onClick={this.props.onAgeUp}>Age Up</button>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    age: state.r1.age,
    loading: state.r1.loading
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    onAgeUp: () => {
      console.log("AgeUp Fired...");
      dispatch(actions.ageUp(1)); //action type and payload
    },
    onAgeDown: () => {
      console.log("AgeDown Fired...");
      dispatch(actions.ageDown(1));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
