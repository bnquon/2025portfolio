import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { DATA } from "../../data/data";
import RevealAnimationWrapper from "../RevealAnimationWrapper";

const ThemeButton = () => {
  return (
    <div className="rounded-xl sm:w-[50px] sm:h-[50px] bg-black px-5 py-1 flex justify-center items-center">
      <FontAwesomeIcon icon={faCode} size="xl" color="white" />
    </div>
  );
};

const NavItems = () => {
  return (
    <div className="flex gap-6">
      {DATA.nav.map((item, idx) => (
        <div
          key={idx}
          className="rounded-4xl border-[1px] border-gray-500 px-6 py-3 sm:py-2 2xl:py-3 sm:min-w-[165px] 2xl:min-w-[200px] flex items-center justify-center"
        >
          <span className="2xl:text-2xl text-xl">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default function NavBar() {
  return (
    <RevealAnimationWrapper distance={-60} delay={1.65} className="justify-between sm:flex hidden">
      <ThemeButton />
      <NavItems />
    </RevealAnimationWrapper>
  );
}
