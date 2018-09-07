import { 
    randomEnemyHandler, 
    attackFunction, } from '../reducerFunctions';

import { enemiesArray } from '../stateArrays';


const initialState = {
    enemies: enemiesArray,
    enemy: {},
}

const onEnemy = (state = initialState, action) => {
    const { enemy, enemies} = state
    switch (action.type) {
        case 'GENERATE_RANDOM_ENEMY' : {
            console.log("charchanges reducer, gen random enemy: " + action.payload)
            return {...state,
            enemy: randomEnemyHandler(enemies)}
        }
        break;
        case 'ATTACK' : {
            console.log("ATTACK! action reached: "+ action.payload)
            return {...state,
            enemy: {...enemy, health: attackFunction(enemy, action.payload)},
            }
        }
        case 'NEW_GAME' : {
            console.log("NEW_GAME case reached")
            return initialState
        }
        break;
        default: {
            console.log("Unhandled action", action.type);
            return state
        }
    }
}

export default onEnemy;