import { AvatarPNG, icons, routes } from "@/common";
import { cn } from "@/lib";
import { NavLink } from "react-router-dom";

// Leaving this for legacy purposes :)
// const avatar = new URL("../../assets/image-avatar.png", import.meta.url);
const Sidebar = () => {
  return (
    <aside className="sticky top-8 m-8 flex flex-row bg-brand-200 lg:flex-col">
      <div className="flex items-center justify-between p-6">
        <div className="aspect-square w-10">
          <NavLink to="/">
            <icons.site.logo />
          </NavLink>
        </div>

        <ul className="flex items-center justify-between gap-8">
          {routes.map((route) => (
            <li key={route.alt}>
              <NavLink
                to={route.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-center",
                    isActive && "text-white"
                  )
                }
              >
                <route.icon className="fill-current" />
                <span className="sr-only">{route.alt}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="w-10 rounded-full border border-white">
          <img src={AvatarPNG} alt="avatar" />
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
