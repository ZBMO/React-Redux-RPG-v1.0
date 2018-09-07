import React, { Component } from 'react';
import { connect } from 'react-redux'
import { gotoBattleScreen, generateRandomEnemy, buyAttack, buyHealth } from '../actions';




class StoreScreen extends Component {

    newBattle = () => {
        this.props.gotoBattleScreen()
        this.props.generateRandomEnemy()
    }

    render() {
        const  { chosen, buyAttack, buyHealth} = this.props
      return (
        <div>
            <p> 
            This is the StoreScreen
            xp available: {chosen.xp}<br />
            max health: {chosen.maxhealth} <br />
            health:     {chosen.health}<br />
            attack:     {chosen.attack}<br />
            </p>

            <div>
                <span> buy +2 attack for 5 xp </span>
                <button onClick={() => 
                    (chosen.xp >= 5) ? 
                        buyAttack(2, 5) : 
                        alert("insufficient xp to purchase")}
                        >BUY</button><br />
                
                <span> buy +10 health for 5 xp </span>
                <button onClick={() =>
                    (chosen.xp >= 5) ?
                        buyHealth(10, 5) :
                        alert("insufficient xp to purchase")}
                        >BUY</button><br />
                
                <button onClick={() => this.newBattle()}>Back to battle!</button>
            </div>
        </div>
      );
    }
  }



const mapDispatchToProps = dispatch => ({
    
    gotoBattleScreen: () => {dispatch(gotoBattleScreen())},
    generateRandomEnemy: () => {dispatch(generateRandomEnemy())},
    buyAttack: (product, cost) => {dispatch(buyAttack(product, cost))},
    buyHealth: (product, cost) => {dispatch(buyHealth(product, cost))},
    
    
});

const mapStateToProps = state => ({
    characters: state.onChosen.characters,
    chosen: state.onChosen.chosen,
})



export default connect(mapStateToProps, mapDispatchToProps)(StoreScreen)