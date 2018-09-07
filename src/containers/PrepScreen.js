import React, { Component } from 'react';
import { connect } from 'react-redux'
import { gotoBattleScreen, gotoStartScreen, generateRandomEnemy } from '../actions';

class PrepScreen extends Component {
   
    newBattle = () => {
        this.props.gotoBattleScreen()
        this.props.generateRandomEnemy()
    }
    
    render() {
        const { chosen } = this.props
      return (
        <div>
            This is the PrepScreen
                
            <p>
                Your Character: {chosen.name}<br />
                Stats:                          <br />
                Attack: {chosen.attack}pts      <br />
                Health: {chosen.health}hp,      <br />
            </p>
            <button onClick={() => this.newBattle()}>New Battle!</button><br />
            <button onClick={() => this.props.gotoStartScreen()}>Go Back to Character Selection</button>
        </div>
      );
    }
  }

const mapDispatchToProps = dispatch => ({
    gotoBattleScreen: () => {dispatch(gotoBattleScreen())},
    gotoStartScreen: () => {dispatch(gotoStartScreen())},
    generateRandomEnemy: () => {dispatch(generateRandomEnemy())}
    
});

const mapStateToProps = state => ({
    characters: state.onChosen.characters,
    chosen: state.onChosen.chosen

})



export default connect(mapStateToProps, mapDispatchToProps)(PrepScreen)