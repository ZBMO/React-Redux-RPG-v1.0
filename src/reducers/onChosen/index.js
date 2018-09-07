import {
    chooseCharacterHandler,  
    getAttackedFunction,
    handleXpIncrease,
    handleBuyAttack,
    handleBuyHealth,
    handleXpCost, } from '../reducerFunctions';

import { characterArray } from '../stateArrays';

const initialState = {
    characters: characterArray,
    chosen: {},
}

const onChosen = (state = initialState, action) => {
    const { chosen, characters} = state
    switch (action.type) {
        case 'CHOOSE_CHARACTER' : {
            console.log("choose char payload: " + action.payload)
            return {...state,
            chosen: chooseCharacterHandler(action.payload, characters)}
        }
        break;
        case 'GET_ATTACKED' : {
            console.log("GET_ATTACK! action reached")
            return {...state,
            chosen: {...chosen, 
                health: getAttackedFunction(action.payload, chosen)},
            }
        }
        case 'INCREASE_XP' : {
            console.log("INCREASE_XP case reached")
            return {...state,
            chosen: {...chosen, xp: handleXpIncrease(chosen)}
            }
        }
        case 'BUY_ATTACK' : {
            console.log("BUY_ATTACK case reached")
            return {...state, 
                chosen: {...chosen,
                    attack: handleBuyAttack(action.payload, chosen),
                    xp: handleXpCost(action.payload, chosen)}
                }   
        }
        case 'BUY_HEALTH' : {
            console.log("BUY_HEALTH case reached")
            return {...state, 
                chosen: {...chosen, 
                    health: handleBuyHealth(action.payload, chosen),
                    xp: handleXpCost(action.payload, chosen)}
            } 
        }
        case 'ADD_VICTORY' : {
            console.log("ADD_VICTORY case reached")
            return {...state, 
                chosen: {...chosen, 
                    victories: chosen.victories + 1}
            } 
        }
        default: {
            console.log("Unhandled action", action.type);
            return state
        }
    }
}

export default onChosen;