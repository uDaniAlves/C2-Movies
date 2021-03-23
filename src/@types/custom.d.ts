declare module '*.svg'

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedGenreId:number;
  setSelectedGenreId:function;
  handleClickButton:function;
  genres:GenreResponseProps[];
}

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}