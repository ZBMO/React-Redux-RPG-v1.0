
const initialState = {
    screenSelector: 'STARTSCREEN',
}

const Screens = (state = initialState, action) => {
    
    switch (action.type) {
        case 'GOTO_STARTSCREEN' : {
            console.log("goto_startcreen case reached")
            return {...state,
            screenSelector: 'STARTSCREEN'}
        }
        break;
        case 'GOTO_PREPSCREEN' : {
            console.log("goto_prepscreen case reached")
            return {...state,
            screenSelector: 'PREPSCREEN'}
        }
        break;
        case 'GOTO_BATTLESCREEN' : {
            console.log("goto_battlescreen case reached")
            return {...state,
            screenSelector: 'BATTLESCREEN',}
        }
        break;
        case 'GOTO_LOSESCREEN' : {
            console.log("GOTO_LOSESCREEN case reached")
            return {...state,
            screenSelector: 'LOSESCREEN'}
        }
        break;
        case 'GOTO_WINSCREEN' : {
            console.log("GOTO_WINSCREEN case reached")
            return {...state,
            screenSelector: 'WINSCREEN'}
        }
        break;
        case 'GOTO_STORESCREEN' : {
            console.log("GOTO_STORESCREEN case reached")
            return {...state,
            screenSelector: 'STORESCREEN'}
        }
        break;
        default: {
            console.log("Screens Reducer Unhandled action", action.type);
            return state
        }
    }
}

export default Screens;