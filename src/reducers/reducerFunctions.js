
export const randomEnemyHandler = (enemies) => {
    console.log("randomEnemyHandler reached with: " + enemies)
    return enemies[Math.floor(Math.random() * enemies.length)]
}

export const chooseCharacterHandler = (name, characters) => {
    console.log("chooseCharacter reducer function reached with: " + name)
    for (let i=0; i<=characters.length; i++)
    if (characters[i].name === name) {
        return characters[i]
    }
}

export const attackFunction = (enemy, payload) => {
    return (enemy.health - payload)   
}

export const getAttackedFunction = (payload, chosen) => {
    return (chosen.health - payload)
}

export const handleBuyAttack = (payload, chosen) => {
    return (chosen.attack + payload.purchase)
}

export const handleBuyHealth = (payload, chosen) => {
    if (chosen.health + payload.purchase > chosen.maxhealth) {
        return chosen.maxhealth
    } else {
        return (chosen.health + payload.purchase)
    }
}

export const handleXpCost = (payload, chosen) => {
    return (chosen.xp - payload.cost)
}

export const handleXpIncrease = (chosen) => {
    return (chosen.xp + 1)
}

