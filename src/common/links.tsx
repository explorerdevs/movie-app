import {
  IconBookmarkFullSVG,
  IconNavHomeSVG,
  IconNavMovieSVG,
  IconNavTvSVG,
  LogoSVG,
  IconSearchSVG,
  IconPlaySVG,
  AvatarPNG,
  IconCategoryMovieSVG,
  IconCategoryTvSVG,
  IconNavBookmarkSVG,
} from './assets';

export const icons = {
  logo: LogoSVG,
};

export const routes: IRoutesProps = [
  {
    alt: 'home',
    href: '/',
    icon: (props) => <IconNavHomeSVG {...props} />,
  },
  {
    alt: 'movies',
    href: '/movies',
    icon: (props) => <IconNavMovieSVG {...props} />,
  },
  {
    alt: 'series',
    href: '/series',
    icon: (props) => <IconNavTvSVG {...props} />,
  },
  {
    alt: 'bookmarks',
    href: '/bookmarks',
    icon: (props) => <IconNavBookmarkSVG {...props} />,
  },
];

// movie: ,
// bookmark: IconBookmarkSVG,
// series:
