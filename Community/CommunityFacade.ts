import * as data from '../data';
import Gamer from '../Gamer/Gamer';
import GameFactory from '../Game/GameFactory';
import Commnunity from './Commnunity';
import Game from '../Game/Game';

const factory = new GameFactory();

class CommunityFacade {
  private community: Commnunity;
  games: Game[] = []; 
  gamers: Gamer[] = [];

  constructor() {
    this.community = new Commnunity();
  }

  private initGames() {
    const games = data.games.map((game) => factory.createGame(game.name, game.year, game.genre));

    this.games = games;
  }

  private initGamers() {
    const gamers = data.gamers.map((g) => {
      const gamer = new Gamer(g.nickname, g.gender);
    
      g.games.forEach((game) => {
        if (gamer.hasGame(game.name)) return;

        const newGame = factory.createGame(game.name, game.year, game.genre);
        gamer.addGame(newGame);
      });

      return gamer;
    
     
    });

    this.gamers = gamers;
  }

  private addCommunityMembers() {
    this.gamers.forEach((gamer) => {
      this.community.addMember(gamer);
    });
  }

  public init() {
    this.initGames();
    console.log('---Games Created---');
    console.table(this.games.map(i => i.info()));

    this.initGamers();
    console.log('---Gamers List---');
    console.table(this.gamers.map((g) => ({ id: g.id, nickname: g.nickname, games: g.games.map((item => item.name)) })));

    this.addCommunityMembers();
    console.log('---Community Members---');
    console.log(this.community.getMembersInfo());

    console.log('---Top Games---');
    console.log(this.community.getTopGames());
  }


}

export default CommunityFacade;
