import {
  attackFunction,
  getAttackedFunction,
  handleBuyAttack,
  handleBuyHealth,
  handleXpCost,
  handleXpIncrease,} from '../reducers/reducerFunctions'

describe('attackFunction', () => {
  it('should lower health by given attack pts', () => {
    const enemy = {health: 10}
    const payload = 3
    expect(attackFunction(enemy, payload)).toBe(7)
  })
})

describe('getAttackedFunction', () => {
  it('should lower chosen.health by enemy.attack', () => {
    const payload = 2
    const chosen = {health: 10}
    expect(getAttackedFunction(payload, chosen)).toBe(8)
  })
})


describe('handleBuyAttack', () => {
  it('should increase chosen.attack by payload.purchase', () => {
    const payload = {purchase: 3}
    const chosen = {attack: 5}
    expect(handleBuyAttack(payload, chosen)).toBe(8)
  })
})

describe('handleBuyHealth', () => {
  it('should increase chosen.health by payload.purchase without surpassing chosen.maxhealth', () => {
    const payload1 = {purchase: 5}
    const payload2 = {purchase: 10}
    const chosen = {health: 3, maxhealth: 10}
    expect(handleBuyHealth(payload1, chosen)).toBe(8)
    expect(handleBuyHealth(payload2, chosen)).toBe(10)
  })
})

describe('handleXpCost', () => {
  it('should decrease chosen.xp by payload.cost', () => {
    const payload= {cost: 2}
    const chosen = {xp: 3}
    expect(handleXpCost(payload, chosen)).toBe(1)
  })
})

describe('handleXpIncrease', () => {
  it('should add 1 to chosen.xp', () => {
    const chosen = {xp: 0}
    expect(handleXpIncrease(chosen)).toBe(chosen.xp + 1)
  });
});
