import React, { Component } from 'react';
import { connect } from 'react-redux'
import StartScreen from "./containers/StartScreen";
import BattleScreen from './containers/BattleScreen';
import PrepScreen from './containers/PrepScreen';
import StoreScreen from './containers/StoreScreen';
import LoseScreen from './containers/LoseScreen';
import WinScreen from './containers/WinScreen';
import { gotoBattleScreen } from './actions';

const renderSwitch = (screenSelector) => {
  switch(screenSelector) {
    case 'STARTSCREEN': {
      return <StartScreen />
    }
    break;
    case 'BATTLESCREEN' : {
      return <BattleScreen />
    }
    break;
    case 'PREPSCREEN' : {
      return <PrepScreen />
    }
    break
    case 'STORESCREEN' : {
      return <StoreScreen />
    }
    break;
    case 'LOSESCREEN' : {
      return <LoseScreen />
    }
    break;
    case 'WINSCREEN' : {
      return <WinScreen />
    }
    break;
    default: {
    console.log("default screen case: " + screenSelector)
    return <StartScreen />
    } 
  }
}

class App extends Component {
  render() {
    const { screenSelector} = this.props
    return (
      <div className="App">
      {renderSwitch(screenSelector)}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  screenSelector: state.Screens.screenSelector,

});


const mapDispatchToProps = dispatch => ({
  gotoBattle: () => dispatch(gotoBattleScreen)
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
