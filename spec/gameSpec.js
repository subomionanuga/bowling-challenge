describe('Game Scorecard', function() {

  var game

  beforeEach(function() {
    game = new Game()
  })

  it('checks that a game is created', function() {
    expect(game instanceof Game).toBe(true)
  })

  it('rolls a gutter game', function() {
    for(var i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.score()).toBe(0)
  })

  it('can roll a game of ones', function() {
    for(var i = 0; i < 20; i++) {
      game.roll(1)
    }
    expect(game.score()).toBe(20)
  })

  it('can roll a game of random scores', function() {
    for(var i = 0; i < 20; i++) {
      game.roll(Math.floor((Math.random() * 20) + 1))
    }
    expect(game.score()).toBeGreaterThan(25)
  })
})
