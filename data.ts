import { Genre } from "./Game/Game";

export const games = [
  { name: 'Revolt', year: 1999, genre: Genre.Race },
  { name: 'GTAIII', year: 2001, genre: Genre.Shooter },
  { name: 'Dark Souls III', year: 2011, genre: Genre.Soulslike },
  { name: 'Elden Ring', year: 2022, genre: Genre.Soulslike },
  { name: 'GTA V', year: 2013, genre: Genre.Shooter },
  { name: 'GTA IV', year: 2008, genre: Genre.Shooter },
  { name: 'GTA San Andreas', year: 2004, genre: Genre.Shooter },
  { name: 'Gothic', year: 2001, genre: Genre.Soulslike },
  { name: 'Gothic II', year: 2002, genre: Genre.Soulslike },
  { name: 'FlatOut', year: 2004, genre: Genre.Race}
];

export const gamers = [
  { nickname: 'tepelll', gender: 'male', games: games.slice(0, 3) },
  { nickname: 'bobby', gender: 'female', games: games.slice(0, 2) },
  { nickname: 'archie', gender: 'male', games: games.slice(0, 1) },
  { nickname: 'zyzlev', gender: 'female', games: games.slice(5, 7) },
  { nickname: 'rokky', gender: 'male', games: games.slice(5, 10) },
  { nickname: 'mambo', gender: 'male', games: games.slice(2, 4) },
  { nickname: 'poly', gender: 'female', games: games.slice(3, 6) },
  { nickname: 'twinkey', gender: 'female', games: games.slice(2, 3) },
  { nickname: 'robin', gender: 'male', games: games.slice(8, 9) },
  { nickname: 'qwerty', gender: 'male', games: games.slice(1, 3) }
];

