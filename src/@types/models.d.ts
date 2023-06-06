/*==============================*
          DATA MODELS
  ==============================*/

interface IMovie {
  title: string;
  thumbnail: IThumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface IThumbnail {
  trending?: ITrending;
  regular: IRegular;
}

interface ITrending {
  small: string;
  large: string;
}

interface IRegular {
  small: string;
  medium: string;
  large: string;
}
