import assert from "assert";

export enum Genre {
  Soulslike = 'soulslike',
  Shooter = 'shooter',
  Race  = 'race'
}

interface IGame {
  setDiscount(discount: number): void;
  info(): string;
}

class Game implements IGame {
  private _name: string;
  private year: number;
  private genre: Genre;
  discount: number = 0;

  protected constructor(name: string, year: number, genre: Genre) {
    this._name = name;
    this.year = year;
    this.genre = genre;
  }

  get name(): string {
    return `*${this._name}*`;
  }

  setDiscount(discount: number): void {
    this.discount = discount;
  }

  info(): string {
    return `${this.name} (${this.year}) - ${this.discount}`;
  }

  static create(name: string, year: number, genre: Genre): Game {
    assert(name, 'Name is required');
    assert(year, 'year is required');
    assert(genre, 'Genre is required');
    assert(Object.values(Genre).includes(genre), 'Invalid genre');

    const game = new Game(name, year, genre);

    return game;
  }
}

export default Game;