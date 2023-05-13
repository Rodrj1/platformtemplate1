export default function Presentation() {
  const gradientText =
    'bg-clip-text text-transparent text-opacity-90 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 skew-y-6 text-base md:text-xl';

  return (
    <section
      id="presentation"
      className="-skew-y-6 min-h-[90vh] flex justify-center items-center flex-col"
    >
      <h4 className={gradientText}>Website template</h4>
      <h4 className={gradientText}>from Behance</h4>

      <h1 className="text-5xl w-11/12 md:7/12 lg:w-5/12 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 skew-y-6 text-center">
        This platform offers complete payments, tax, and subscription solutions
        for SaaS
      </h1>

      <div className="hidden md:block skew-y-6 absolute bottom-0 left-0 w-[350px] h-[350px] border-t border-r border-purple-950 rounded-full ">
        <div className="skew-y-6 transition-shadow absolute -skew-x-2 bottom-0 left-0 w-[250px] h-[250px]  rounded-full shadow-lg shadow-purple-800 hover:shadow-purple-950 blur-sm hover:blur-none"></div>
      </div>
    </section>
  );
}
