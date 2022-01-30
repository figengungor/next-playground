import axios from "axios";
import Image from "next/image";

function TrendingMoviewsPage(props) {
  const { movies, updatedDate } = props;
  return (
    <>
      <h1>Trending Movies</h1>
      <p>Updated Date: {updatedDate}</p>
      <ol>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <figure>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                  width={200}
                  height={300}
                />
                <figcaption>
                  {movie.title}({movie.vote_average})
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export async function getStaticProps() {
  //https://developers.themoviedb.org/3/trending/get-trending
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`
    );
    return {
      props: {
        movies: res.data.results,
        updatedDate: new Date().toString(),
      },
      revalidate: 5,
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export default TrendingMoviewsPage;
