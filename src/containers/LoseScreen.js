import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newGame, gotoStartScreen } from '../actions';



class LoseScreen extends Component {

    resetGame = () => {
        this.props.gotoStartScreen()
        this.props.newGame()
    }

    render() {
    const { chosen, enemy } = this.props
      return (
        <div>
            This is the Lose Screen
            <p>
                Defeated by the {enemy.name}        <br />
                death stats:                        <br />
                final xp: {chosen.xp}               <br />
                total victories: {chosen.victories} <br />
            </p>
        <button onClick={() => this.resetGame()}>New Game</button>  
        </div>
      );
    }
  }

const mapDispatchToProps = dispatch => ({
    newGame: () => {dispatch(newGame())},
    gotoStartScreen: () => {dispatch(gotoStartScreen())}
    });

const mapStateToProps = state => ({
    chosen: state.onChosen.chosen,
    enemy: state.onEnemy.enemy,
})



export default connect(mapStateToProps, mapDispatchToProps)(LoseScreen)