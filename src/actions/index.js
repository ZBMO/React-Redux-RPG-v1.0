export const gotoBattleScreen = () => ({
    type: "GOTO_BATTLESCREEN",
});

export const gotoStartScreen = () => ({
      type: "GOTO_STARTSCREEN"
    });

export const gotoPrepScreen = () => ({
    type: "GOTO_PREPSCREEN"
    });

export const gotoStoreScreen = () => ({
    type: "GOTO_STORESCREEN"
})

export const gotoLoseScreen = () => ({
    type: "GOTO_LOSESCREEN"
})

export const gotoWinScreen = () => ({
    type: "GOTO_WINSCREEN"
})

export const newGame = () => ({
    type: "NEW_GAME"
})

export const chooseCharacter = (name) => ({
    type: "CHOOSE_CHARACTER",
    payload: name,
})

export const generateRandomEnemy = () => ({
    type: "GENERATE_RANDOM_ENEMY"
})

export const attack = (chosenAttackpts) => ({
    type: "ATTACK",
    payload: chosenAttackpts
})

export const increaseXp = () => ({
    type: 'INCREASE_XP',
})

export const getAttacked = (enemyAttackpts) => ({
    type: "GET_ATTACKED",
    payload: enemyAttackpts,
})

export const buyAttack = (x, y) => ({
    type: "BUY_ATTACK",
    payload: {purchase: x, cost: y}
})

export const buyHealth = (x, y) => ({
    type: "BUY_HEALTH",
    payload: {purchase: x, cost: y}
})

export const addVictory = () => ({
    type: "ADD_VICTORY",
})



