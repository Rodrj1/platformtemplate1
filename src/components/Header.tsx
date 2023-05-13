export default function Header() {
  return (
    <header>
      <nav className="flex flex-col md:flex-row justify-between md:py-4 md:px-32 text-white border-b border-violet-950/50 z-[200] fixed bottom-0 md:top-0 w-full backdrop-blur-sm h-14 items-center">
        <ul className="flex gap-0 sm:gap-10 text-pink-400 text-sm">
          <li className="cursor-pointer">
            <a href="#presentation" aria-label="To Presentation">
              <span className="invisible sm:visible text-[12px] mr-1 text-white">
                01.
              </span>
              Presentation
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#about" aria-label="To About">
              <span className="invisible sm:visible text-[12px] mr-1 text-white">
                02.
              </span>
              About
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="#roadmap" aria-label="To Roadmap">
              <span className="invisible sm:visible text-[12px] mr-1 text-white">
                03.
              </span>
              Roadmap
            </a>
          </li>

          <li className="cursor-pointer">
            <a href="#contact" aria-label="To Contact">
              <span className="invisible sm:visible text-[12px] mr-1 text-white">
                04.
              </span>
              Contact
            </a>
          </li>
        </ul>

        <a
          className="text-pink-400 text-sm"
          aria-label="link to github"
          href="https://rodriccrz.netlify.app/"
        >
          [rodriccrz]
        </a>
      </nav>
    </header>
  );
}
