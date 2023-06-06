import { icons, routes } from '@src/common';
import { NavLink } from 'react-router-dom';

interface Props {}

const Sidebar = (props: Props) => {
  const avatar = new URL('../../assets/image-avatar.png', import.meta.url);

  return (
    <aside className='sticky top-8 m-8 bg-brand-200 lg:flex-col'>
      <div className='flex items-center justify-between p-6'>
        <div className='aspect-square w-10'>
          <NavLink to='/'>
            {/* <LogoSVG /> */}
            <icons.logo />
          </NavLink>
        </div>

        <ul className='flex items-center justify-between gap-8'>
          {routes.map((route) => (
            <li key={route.alt}>
              <NavLink to={route.href}>
                <route.icon />
                <span className='sr-only'>{route.alt}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='w-10 rounded-full border border-white'>
          <img src={avatar.href} alt='avatar' />
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
