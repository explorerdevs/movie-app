import {
  IconBookmarkSVG,
  IconHomeSVG,
  IconMovieSVG,
  IconTvSVG,
  LogoSVG,
} from './assets';

export const icons = {
  logo: LogoSVG,
};

export const routes: IRoutesProps = [
  {
    alt: 'home',
    href: '/',
    icon: (props) => <IconHomeSVG {...props} />,
  },
  {
    alt: 'movies',
    href: '/movies',
    icon: (props) => <IconMovieSVG {...props} />,
  },
  {
    alt: 'series',
    href: '/series',
    icon: (props) => <IconTvSVG {...props} />,
  },
  {
    alt: 'bookmarks',
    href: '/bookmarks',
    icon: (props) => <IconBookmarkSVG {...props} />,
  },
];

// movie: ,
// bookmark: IconBookmarkSVG,
// series:
