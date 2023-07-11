import { removeFirstChar, request } from "@/lib";
import { useEffect, useState } from "react";
import { Text } from "../atoms";

const HomeTemplate = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

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

  return (
    <ul>
      {movies?.map((movie) => {
        return (
          <li key={movie.title}>
            <article>
              <img src={movie.thumbnail.regular.small} alt={movie.title} />
              <Text as="h3">{movie.title}</Text>
              <Text as="p">{movie.year}</Text>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export { HomeTemplate };
