import assert from "assert";
import { v4 as uuidv4 } from 'uuid';
import Game from "../Game/Game";

interface IGamer {
  addGame(game: Game): void;
  gameList(): Game[];
  hasGame(name: string): boolean;
}

class Gamer implements IGamer {
  private _id: string;
  games: Game[] = [];

  constructor(public nickname: string, public gender: string) {
    assert(nickname, 'nickname is required');
    assert(gender, 'gender is required');
    this._id = uuidv4();
  }

  get id(): string {
    return this._id;
  }

  addGame(game: Game): void {
    this.games = this.games.concat(game);
  }

  gameList(): Game[] {
    return this.games;
  }

  hasGame(gameName: string): boolean {
    return this.games.some((game) => game.name.toLowerCase().includes(gameName.toLowerCase()));
  }
}

export default Gamer;
