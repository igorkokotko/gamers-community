import Game from "../Game/Game";
import Gamer from "../Gamer/Gamer";

interface ICommunity {
  addMember(gamer: Gamer): void;
  removeMember(gamer: Gamer): void;
  getMembersInfo(): string;
  getTopGames(limit: number): string[];
}

class Commnunity implements ICommunity {
  private minMembers = 2;

  members: Gamer[] = [];

  private isValid(): boolean {
    return this.members.length >= this.minMembers;
  }

  private validate() {
    if (!this.isValid()) {
      throw new Error(`Community should have at least ${this.minMembers} members.`);
    }
  }

  addMember(gamer: Gamer) {
    this.members = this.members.concat(gamer);
  }

  removeMember(gamer: Gamer) {
    this.members = this.members.filter((g) => g.id !== gamer.id);
  }

  getMembersInfo(): string {
    this.validate();

    const membersInfo = this.members.map((gamer) => {
      return `nickname: ${gamer.nickname}, games: ${gamer.gameList().map((game) => game.info()).join(', ')}`;
    });

    return membersInfo.join('\n');
  }

  getTopGames(limit = 3): string[] {
    this.validate();

    const allGames = this.members.reduce((acc, gamer) => {
      return acc.concat(gamer.gameList());
    }, [] as Game[]);
    const gamesRank = allGames.reduce((acc, game) => {
      acc[game.name] = acc[game.name] ? acc[game.name] + 1 : 1;
      return acc;
    }, {} as Record<string, number>);
    
    const games = Object.entries(gamesRank).map(([name, count]) => ({ name, count }));
    
    const sortedGames = games.sort((a, b) => b.count - a.count);

    return sortedGames.slice(0, limit).map((game) => game.name);
  }
}

export default Commnunity;
