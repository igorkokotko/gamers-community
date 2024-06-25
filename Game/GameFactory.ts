import Game, { Genre } from './Game'

class GameFactory {
  public createGame(name: string, year: number, genre: Genre): Game {
    const game = Game.create(name, year, genre);

    game.setDiscount(this.getDiscountByGenre(genre));

    return game;
  }

  private getDiscountByGenre(genre: Genre): number {
    switch (genre) {
      case Genre.Soulslike:
        return 35;
      case Genre.Shooter:
        return 10;
      case Genre.Race:
        return 20;
    }
  }
}

export default GameFactory;

