import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

const Slider = ({ movies }) => {
  const options = {
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
  };

  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {movies.map((movie) => {
            const { id, poster_path, title } = movie;
            return (
              <div key={id} className="embla__slide">
                <Link href={`movies/${id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt={`${title} Poster`}
                    className="embla__slide__img"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
