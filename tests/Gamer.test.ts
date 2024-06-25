import Gamer from '../Gamer/Gamer';
import GameFactory from '../Game/GameFactory';
import { Genre } from '../Game/Game';

const factory = new GameFactory();
const games = [
  { name: 'Revolt', year: 1999, genre: Genre.Race },
  { name: 'GTAIII', year: 2001, genre: Genre.Shooter },
  { name: 'Dark Souls III', year: 2011, genre: Genre.Soulslike }
];

describe('Gamer Class', () => {
  let gamer: Gamer;

  beforeEach(() => {
    gamer = new Gamer('tepelll', 'male');
  });

  it('should create Gamer with uniq id', () => {
    expect(gamer.id).toHaveLength(36);
  });

  it('should add games to Gamer', () => {
    gamer.addGame(factory.createGame(games[0].name, games[0].year, games[0].genre));
    gamer.addGame(factory.createGame(games[1].name, games[1].year, games[1].genre));

    expect(gamer.gameList().length).toBe(2);
  });

  it('should return true if game with proper name exists', () => {
    gamer.addGame(factory.createGame(games[0].name, games[0].year, games[0].genre));

    expect(gamer.hasGame(games[0].name)).toBeTruthy();
  });

  it('should return false if game with proper name does not exist', () => {
    gamer.addGame(factory.createGame(games[0].name, games[0].year, games[0].genre));

    expect(gamer.hasGame('RevoltIII')).toBeFalsy();
  });
});