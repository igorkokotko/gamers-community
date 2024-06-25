import Gamer from '../Gamer/Gamer';
import GameFactory from '../Game/GameFactory';
import Commnunity from '../Community/Commnunity';
import * as mockData from './mockData';

const factory = new GameFactory();

describe('Gommunity Class', () => {
  let community: Commnunity;

  beforeEach(() => {
    community = new Commnunity();
  });

  it('should add gamers to the community', () => {
    const gamer1 = new Gamer('gamer1', 'male');
    const gamer2 = new Gamer('gamer2', 'female');

    community.addMember(gamer1);
    community.addMember(gamer2);

    expect(community.members.length).toBe(2);
  });

  it('should remove gamer from community', () => {
    const gamer1 = new Gamer('gamer1', 'male');
    const gamer2 = new Gamer('gamer2', 'female');

    community.addMember(gamer1);
    community.addMember(gamer2);
    community.removeMember(gamer2);

    expect(community.members.length).toBe(1);
  });

  it('should throw error if validation failed', () => {
    expect(() =>community.getMembersInfo()).toThrow('Community should have at least 2 members.');
    expect(() =>community.getTopGames()).toThrow('Community should have at least 2 members.');
  });

  it('should get members info', () => {
    const mockGamers = [
      { nickname: 'multi gamer', gender: 'male', games: mockData.games.slice(0, 5)},
      { nickname: 'old school gamer', gender: 'female', games: mockData.games.slice(0, 2)},
      { nickname: 'solo gamer', gender: 'male', games: mockData.games.slice(0, 1)}
    ];
    const gamers = mockGamers.map((g) => {
      const gamer = new Gamer(g.nickname, g.gender);

      g.games.forEach((game) => {
        const newGame = factory.createGame(game.name, game.year, game.genre);
        gamer.addGame(newGame);
      });

      return gamer;
    });

    gamers.forEach((gamer) => {
      community.addMember(gamer);
    });

    expect(community.getMembersInfo()).toBe(`nickname: multi gamer, games: *Revolt* (1999) - 20, *GTAIII* (2001) - 10, *Dark Souls III* (2011) - 35, *Elden Ring* (2022) - 35, *GTA V* (2013) - 10\nnickname: old school gamer, games: *Revolt* (1999) - 20, *GTAIII* (2001) - 10\nnickname: solo gamer, games: *Revolt* (1999) - 20`)
  });

  it('should get top 3 games', () => {
    const mockGamers = [
      { nickname: 'multi gamer', gender: 'male', games: mockData.games.slice(0, 5)},
      { nickname: 'old school gamer', gender: 'female', games: mockData.games.slice(0, 2)},
      { nickname: 'solo gamer', gender: 'male', games: mockData.games.slice(0, 1)}
    ];
    const gamers = mockGamers.map((g) => {
      const gamer = new Gamer(g.nickname, g.gender);

      g.games.forEach((game) => {
        const newGame = factory.createGame(game.name, game.year, game.genre);
        gamer.addGame(newGame);
      });

      return gamer;
    });

    gamers.forEach((gamer) => {
      community.addMember(gamer);
    });

    expect(community.getTopGames()).toEqual(['*Revolt*',  '*GTAIII*', '*Dark Souls III*']);
  });
});