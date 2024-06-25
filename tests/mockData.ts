import { Genre } from "../Game/Game";

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
  { nickname: 'multi gamer', gender: 'male', games: games.slice(0, 3)},
  { nickname: 'old school gamer', gender: 'female', games: games.slice(0, 2)},
  { nickname: 'solo gamer', gender: 'male', games: games.slice(0, 1)}
];