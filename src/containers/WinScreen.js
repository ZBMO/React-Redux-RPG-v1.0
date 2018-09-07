import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newGame, gotoStoreScreen, gotoBattleScreen, generateRandomEnemy } from '../actions';



class WinScreen extends Component {

    newBattle = () => {
        this.props.gotoBattleScreen()
        this.props.generateRandomEnemy()
    }

    render() {
        const { chosen, enemy } = this.props
      return (
        <div>
        This is the Win Screen<br />
            <div>
                <p>
                    You have defeated the {enemy.name}<br />
                    Current xp: {chosen.xp},<br />
                    Health: {chosen.health}.<br />
                    Attack: {chosen.attack},<br />
                    Victories: {chosen.victories},<br />
                </p>
                <button onClick={() => this.newBattle()}>New Battle!</button><br />
                <button onClick={() => this.props.gotoStoreScreen()}>Go To Store</button><br />
            </div>  
        </div>
      );
    }
  }

const mapDispatchToProps = dispatch => ({
    newGame: () => {dispatch(newGame())},
    gotoStoreScreen: () => {dispatch(gotoStoreScreen())},
    gotoBattleScreen: () => {dispatch(gotoBattleScreen())},
    generateRandomEnemy: () => {dispatch(generateRandomEnemy())}
    });


const mapStateToProps = state => ({
    chosen: state.onChosen.chosen,
    enemy: state.onEnemy.enemy,
})



export default connect(mapStateToProps, mapDispatchToProps)(WinScreen)