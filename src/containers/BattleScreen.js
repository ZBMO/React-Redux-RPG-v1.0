import React, { Component } from 'react';
import { connect } from 'react-redux'
import { gotoStartScreen, gotoStoreScreen, gotoLoseScreen, gotoWinScreen, attack, getAttacked, addVictory, increaseXp } from '../actions';




class BattleScreen extends Component {
    fightRound = (enemyAttackpts, chosenAttackpts) => {
        this.props.attack(chosenAttackpts)
        this.props.increaseXp()
        setTimeout(() => {this.props.getAttacked(enemyAttackpts)}, 500)
    }

    render() {
        const { chosen, enemy } = this.props
      return (
        <div>
            This is the BattleScreen
            {(chosen.health <=0) ? this.props.gotoLoseScreen() : ""}
            {(enemy.health > 0) 
                ?
                <div>
                    <div className="you">   
                        <p>
                            Your Character: {chosen.name}<br />
                            Attack: {chosen.attack}pts,     <br />
                            Health: {chosen.health}hp,      <br />
                            xp: {chosen.xp},                <br />
                        </p>
                    </div>
            
                    <div className="enemy">
                        <p>
                            Enemy: {enemy.name}<br />
                            Attack: {enemy.attack}pts,     <br />
                            Health: {enemy.health}hp,      <br />
                        </p>
                    </div>
                    <button onClick={() => this.fightRound(enemy.attack, chosen.attack)}>Attack!</button>
                </div>
                :
                <div>   
                    {this.props.gotoWinScreen()}
                    {this.props.addVictory()}
                </div>
            }
         
        </div>
      );
    }
  }



const mapDispatchToProps = dispatch => ({
    gotoStartScreen: () => {dispatch(gotoStartScreen())},
    attack: (chosenAttackpts) => {dispatch(attack(chosenAttackpts))},
    increaseXp: () => {dispatch(increaseXp())},
    getAttacked: (enemyAttackpts) => {dispatch(getAttacked(enemyAttackpts))},
    gotoStoreScreen: () => {dispatch(gotoStoreScreen())},
    gotoLoseScreen: () => {dispatch(gotoLoseScreen())},
    gotoWinScreen: () => {dispatch(gotoWinScreen())},
    addVictory: () => {dispatch(addVictory())},
    });


const mapStateToProps = state => ({
    chosen: state.onChosen.chosen,
    enemy: state.onEnemy.enemy,
})



export default connect(mapStateToProps, mapDispatchToProps)(BattleScreen)