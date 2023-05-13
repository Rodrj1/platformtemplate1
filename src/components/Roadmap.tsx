import {
  SVGDesign,
  SVGEarth,
  SVGHammer,
  SVGLaptop,
  SVGPalette,
  SVGSearch,
} from './SVGS';
import Step from './Step';

export default function Roadmap() {
  return (
    <>
      <section
        id="roadmap"
        className="relative py-20 lg:py-52 xl:py-0 -skew-y-6 min-h-[80vh] flex justify-center flex-col xl:flex-row gap-10 md:gap-10 items-center bg-gradient-to-r from-[#151328] to-slate-900 text-white z-40"
      >
        <div className="flex gap-1 justify-center items-start skew-y-6 flex-col text-left w-auto md:w-[350px] p-2 sm:p-0">
          <div className="flex gap-3 items-center">
            <div className="h-4 w-4 bg-purple-500" />

            <h4 className="bg-clip-text text-transparent text-opacity-90 bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600">
              WHAT WE DO
            </h4>
          </div>

          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200">
            The roadmap
          </h2>
          <p className="text-sm">
            The work on the project always takes place in several stages. We
            have three sprints, which eventually end with a well-thought-out
            product
          </p>
        </div>

        <Step
          name="01 step"
          first="Research"
          second="Design approach"
          icon={<SVGSearch />}
          icon2={<SVGDesign />}
          i={1}
        />

        <Step
          name="02 step"
          first="Site map"
          second="Low fidelity frames"
          icon={<SVGEarth />}
          icon2={<SVGHammer />}
          i={2}
        />

        <Step
          name="03 step"
          first="High fidelity frames"
          second="Testing"
          icon={<SVGPalette />}
          icon2={<SVGLaptop />}
          i={3}
        />
        <section className="absolute skew-y-12 min-h-[45vh] w-full translate-y-96 -z-30 bg-gradient-to-r from-[#151328] to-slate-900"></section>
      </section>
    </>
  );
}
