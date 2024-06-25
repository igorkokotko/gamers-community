import Game, { Genre } from '../Game/Game';
import GameFactory from '../Game/GameFactory';

describe('GameFactory Class', () => {
  let factory: GameFactory;

  beforeEach(() => {
    factory = new GameFactory();
  });

  it('should create a Game instance', () => {
    const game = factory.createGame('Revolt', 1999, Genre.Race);
    expect(game).toBeInstanceOf(Game);
  });

  it('should create a Game race with right values', () => {
    const game = factory.createGame('Revolt', 1999, Genre.Race);

    expect(game.info()).toBe('*Revolt* (1999) - 20');
  });

  it('should create a Game shoter with right values', () => {
    const game = factory.createGame('GTAIII', 2001, Genre.Shooter);

    expect(game.info()).toBe('*GTAIII* (2001) - 10');
  });

  it('should create a Game soulslike with right values', () => {
    const game = factory.createGame('Dark Souls III', 2011, Genre.Soulslike);

    expect(game.info()).toBe('*Dark Souls III* (2011) - 35');
  });
});