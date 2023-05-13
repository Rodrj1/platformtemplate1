import dashboard from '../assets/dashboard.png';

export default function About() {
  return (
    <section
      id="about"
      className="-skew-y-6 min-h-[90vh] flex flex-col-reverse lg:flex-row justify-center gap-10 md:gap-40 items-center bg-gradient-to-r from-violet-950/20 to-purple-950/20 text-white py-20 md:py-0 px-2 md:px-0"
    >
      <div className="skew-y-6 md:w-[613px] md:min-h-[434px] bg-gradient-to-r from-purple-900 to-purple-950 p-[1.55px] flex justify-center items-center rounded-md md:shadow-xl shadow-violet-700 shadow-none">
        <img
          src={dashboard}
          className="md:w-[613px] h-[434px] -z-40 object-cover object-center"
        />
      </div>

      <div className="flex gap-1 justify-center items-start skew-y-6 flex-col text-left w-auto sm:w-[350px]">
        <div className="flex gap-3 items-center">
          <div className="h-4 w-4 bg-purple-500" />

          <h4 className="bg-clip-text text-transparent text-opacity-90 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600">
            ABOUT PROJECT
          </h4>
        </div>

        <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200">
          Keep a finger on the pulse of your business
        </h2>
        <p className="text-sm">
          B2B and B2C software companies around the globe use this platform to
          offload operational complexities so they can focus on growth
        </p>
      </div>
    </section>
  );
}
