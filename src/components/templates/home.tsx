import { icons } from "@/common";
import { cn, removeFirstChar, request } from "@/lib";
import { useEffect, useState } from "react";
import { Text } from "../atoms";

const HomeTemplate = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const trendingMovies = movies.filter((movie) => movie.isTrending);

  useEffect(() => {
    //this is an IIFE, and all this "bleh" setup is for the dummy data
    // will remove this after the app styles are done
    (async function () {
      try {
        const response = await request("/data.json");

        const dataWithFormattedImagePaths = JSON.parse(
          JSON.stringify(response),
          (key, value) => {
            if (key === "trending" || key === "regular") {
              value.small = removeFirstChar(value?.small);
              value.medium = removeFirstChar(value?.medium);
              value.large = removeFirstChar(value?.large);
            }
            return value;
          }
        );

        setMovies(dataWithFormattedImagePaths);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.table(movies);

  return (
    <>
      {/* TRENDING MOVIES CAROUSEL */}
      <section>
        <Text as="h2" color="primary" size={"2xl"} weight={"light"}>
          Trending
        </Text>

        <ul
          aria-label="Trending Movies"
          className="flex items-center gap-16 overflow-x-scroll"
        >
          {trendingMovies.map((movie) => {
            const Icon =
              movie.category.toLocaleLowerCase() === "movie"
                ? icons.category.movie
                : icons.category.series;

            return (
              <li
                key={movie.title}
                className={cn(`flex-1 overflow-clip rounded-brand`)}
              >
                <article className="px-8 py-12">
                  <img
                    src={movie.thumbnail.trending?.large}
                    alt={movie.title}
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <Text as="time" dateTime={String(movie.year)}>
                        {movie.year}
                      </Text>

                      <Text as="p" className="flex items-center gap-2">
                        <span>
                          <Icon />
                        </span>
                        <span>{movie.category}</span>
                      </Text>

                      <Text as="p">{movie.rating}</Text>
                    </div>
                  </div>

                  <Text as="h3" size={"lg"} weight={"medium"}>
                    {movie.title}
                  </Text>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
      {/* TRENDING MOVIES CAROUSEL */}

      {/*   style={{ '--min-column-size': '30rem' } as CSSCustomProperties} */}
    </>
  );
};

export { HomeTemplate };
