import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootLayout } from "../components";
import { LoginRoute, RegisterRoute } from "./auth";
import { HomeRoute } from "./home";
import { MoviesRoute } from "./movies";
import { TvSeriesRoute } from "./series";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" element={<LoginRoute />} />
      <Route path="register" element={<RegisterRoute />} />

      <Route element={<RootLayout />}>
        <Route index element={<HomeRoute />} />

        <Route path="movies">
          <Route index element={<MoviesRoute />} />
        </Route>

        <Route path="series">
          <Route index element={<TvSeriesRoute />} />
        </Route>

        <Route path="*" element={<h1>Error Page</h1>} />
      </Route>
    </Route>
  ),
  { basename: import.meta.env.DEV ? "/" : "/movie-app/" }
);
