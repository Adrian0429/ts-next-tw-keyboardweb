import { useEffect, useState } from "react";
import { getPopularMovies } from "@/pages/api/tmdBAPI";
import Image from "next/image";

type Datatype = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

const MoviesPage = () => {
  const [movies, setMovies] = useState<Datatype[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
        setIsLoading(true);

      try {
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <main className="min-h-screen bg-rose-200">
      <div className="flex flex-col items-center py-10 max-w-2xl mx-auto">
        <h1>My Next.js App</h1>
        <ul className="text-rose-400 flex flex-wrap">
          {movies.map((movie) => (
            <li key={movie.id}>
              <div className="flex flex-col items-center bg-gray-200 p-2 m-1 rounded-lg">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                />
                <div>
                  <p>{movie.id}</p>
                  <p>{movie.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MoviesPage;
