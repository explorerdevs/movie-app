import LogoSVG from '../../assets/logo.svg';
import HomeSVG from '../../assets/icon-nav-home.svg';
import MovieSVG from '../../assets/icon-nav-movies.svg';
import TvSVG from '../../assets/icon-nav-tv-series.svg';
import BookmarkSVG from '../../assets/icon-bookmark-full.svg';
import { NavLink } from 'react-router-dom';

interface Props {}

const Sidebar = (props: Props) => {
  const avatar = new URL('../../assets/image-avatar.png', import.meta.url);

  return (
    <aside className='sticky top-8 m-8 bg-brand-200 lg:flex-col'>
      <div className='flex items-center justify-between p-6'>
        <div className='aspect-square w-10'>
          <NavLink to='/'>
            <LogoSVG />
          </NavLink>
        </div>
        <ul className='flex items-center justify-between gap-8'>
          <li>
            <NavLink to='/'>
              <HomeSVG />
            </NavLink>
          </li>
          <li>
            <NavLink to='/movies'>
              <MovieSVG />
            </NavLink>
          </li>
          <li>
            <NavLink to='/series'>
              <TvSVG />
            </NavLink>
          </li>
          <li>
            <NavLink to='/bookmarks'>
              <BookmarkSVG />
            </NavLink>
          </li>
        </ul>
        <div className='w-10 rounded-full border border-white'>
          <img src={avatar.href} alt='avatar' />
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
