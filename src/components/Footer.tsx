export default function Footer() {
  return (
    <section
      id="contact"
      className="min-h-[90vh] flex justify-center gap-2 items-center  text-white flex-col bg-zinc-950 -translate-y-6 sm:translate-y-11 md:-translate-y-14 lg:-translate-y-14 xl:-translate-y-0"
    >
      <h1 className="text-5xl w-11/12 md:w-5/12 text-transparent bg-clip-text text-opacity-90 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 text-center h-[150px] md:min-h-[60px] sm:mt-10">
        Thank you for watching!
      </h1>

      <h3 className="text-xl w-11/12 md:w-5/12 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 text-center">
        This is a website concept from Behance
      </h3>

      <span>
        See more in:{' '}
        <a
          className="text-pink-400"
          aria-label="link to github"
          href="https://rodriccrz.netlify.app/"
        >
          [rodriccrz]
        </a>
      </span>

      <span>
        Contact me in {' '}
        <a
          className="text-pink-400"
          aria-label="link to linkedin"
          href="https://www.linkedin.com/in/rodrigoagustinccrz/"
        >
          [Linkedin]
        </a>
      </span>
    </section>
  );
}
