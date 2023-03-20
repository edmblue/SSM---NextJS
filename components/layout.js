import Head from 'next/head';
import Link from 'next/link';

const Layout = ({
  children,
  titleHead = '',
  description = '',
  imageSelected,
  title,
  overview,
  inner,
}) => {
  return (
    <>
      <Head>
        <title>SSM | {titleHead}</title>
        <meta name="description" content={description} />
      </Head>
      <style jsx>
        {`
          .content-wrapper {
            background-image: linear-gradient(
                to right,
                rgba(0 0 0 / 0.9),
                rgba(0 0 0 / 0.65)
              ),
              url(${imageSelected});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
      </style>
      <main>
        <div className=" px-6 flex flex-col content-wrapper min-h-screen">
          <nav className="flex gap-3 font-bold text-white text-2xl pt-6">
            <Link
              className=" hover:bg-white hover:bg-opacity-60 py-3 px-4 rounded-sm"
              href="/"
            >
              Home
            </Link>
            <Link
              className=" hover:bg-white hover:bg-opacity-60 py-3 px-4 rounded-sm"
              href="https://github.com/edmblue"
            >
              About
            </Link>
          </nav>
          <div className="max-w-[50rem] flex items-center justify-center flex-col text-white ">
            <div className="mt-[50%] pb-20">
              <h2 className="sm:text-9xl text-8xl">{title}</h2>
              <p
                className={`text-3xl mt-10 description ${inner ? 'inner' : ''}`}
              >
                {overview}
              </p>
            </div>
          </div>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
