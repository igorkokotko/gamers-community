import Game, { Genre } from '../Game/Game';

describe('Game Class', () => {
  let game: Game;

  beforeEach(() => {
    game = Game.create('GTAIII', 2001, Genre.Shooter);
  });

  it('should create a game with name as format *{name}*', () => {
    expect(game.name).toBe('*GTAIII*');
  });

  it('should return info that includes name, year and discout', () => {
    game.setDiscount(10);
    expect(game.info()).toBe('*GTAIII* (2001) - 10');
  });
});