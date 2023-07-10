import {
  IconBookmarkFullSVG,
  IconCategoryMovieSVG,
  IconCategoryTvSVG,
  IconLogoSVG,
  IconNavBookmarkSVG,
  IconNavHomeSVG,
  IconNavMovieSVG,
  IconNavTvSVG,
  IconPlaySVG,
} from "./assets";

type IconObject = "site" | "category" | "bookmark";

export const icons = {
  site: {
    logo: (props) => <IconLogoSVG {...props} />,
    play: (props) => <IconPlaySVG {...props} />,
    search: (props) => <IconLogoSVG {...props} />,
  },
  bookmark: {
    empty: (props) => <IconBookmarkFullSVG {...props} />,
    full: (props) => <IconLogoSVG {...props} />,
  },
  category: {
    movie: (props) => <IconCategoryMovieSVG {...props} />,
    series: (props) => <IconCategoryTvSVG {...props} />,
  },
} satisfies Record<IconObject, Record<string, IconRFCType>>;

export const routes = [
  {
    alt: "home",
    href: "/",
    icon: (props) => <IconNavHomeSVG {...props} />,
  },
  {
    alt: "movies",
    href: "/movies",
    icon: (props) => <IconNavMovieSVG {...props} />,
  },
  {
    alt: "series",
    href: "/series",
    icon: (props) => <IconNavTvSVG {...props} />,
  },
  {
    alt: "bookmarks",
    href: "/bookmarks",
    icon: (props) => <IconNavBookmarkSVG {...props} />,
  },
] satisfies IRoutesProps;
