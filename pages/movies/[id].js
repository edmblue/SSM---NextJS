import Layout from '@/components/layout';
import { formatAmount } from '@/helpers';

const Movie = ({ movieData }) => {
  const {
    title,
    overview,
    backdrop_path,
    genres,
    release_date,
    budget,
    homepage,
    runtime,
    production_companies,
  } = movieData;

  const imageSelected = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <Layout
      titleHead={title}
      description={`All you need to know about ${title}`}
      imageSelected={imageSelected}
      title={title}
      overview={overview}
      inner={true}
    >
      <div className="text-white flex flex-col sm:flex-row sm:flex-wrap font-black gap-6 mt-auto pb-4 sm:pb-20 md:gap-[10rem]">
        <div className="flex sm:justify-between gap-3 flex-col md:flex-row w-full">
          <div className="md:w-1/2">
            <p>
              Release date: <span className="font-normal">{release_date}</span>
            </p>
            <p>
              Budget:{' '}
              <span className="font-normal">{formatAmount(budget)}</span>
            </p>
            <div>
              Genres:{' '}
              <p className="font-normal">
                {genres.map((item, i) => {
                  return <span key={i}>{item.name} </span>;
                })}
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <a target="_blank" href={homepage}>
              Oficial Website
            </a>
            <div>
              <h3>Runtime</h3>
              <p className="font-normal md:w-2/3">{runtime} minutes</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 md:gap-3 md:flex-row items-center md:justify-around bg-white py-4 bg-opacity-40">
          {production_companies.map((company, i) => {
            return (
              <img
                key={i}
                src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                alt={`${company.name}'s logo`}
                className="w-1/6"
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const url = `${process.env.API_URL}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`;

  const response = await fetch(url);
  const movieData = await response.json();

  return {
    props: {
      movieData,
    },
  };
}

export default Movie;
