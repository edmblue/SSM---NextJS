import { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import Slider from '@/components/slider';

export default function Home({ movies }) {
  const [indexMovie, setIndexMovie] = useState({});

  const selectIndexMovie = () => {
    const random = movies[Math.floor(Math.random() * movies.length)];
    setIndexMovie(random);
  };

  useEffect(() => {
    selectIndexMovie();
  }, []);

  const { title, overview, backdrop_path } = indexMovie;
  const imageSelected = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <Layout
      titleHead="Index"
      description="Top Trending Movies to Enjoy! The Best Today!"
      imageSelected={imageSelected}
      title={title}
      overview={overview}
    >
      <Slider movies={movies} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/trending/movie/day?api_key=${process.env.API_KEY}`;

  const respuesta = await fetch(url);
  const { results: movies } = await respuesta.json();

  return {
    props: {
      movies,
    },
  };
}
