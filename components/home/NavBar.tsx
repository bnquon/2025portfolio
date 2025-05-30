import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { DATA } from "../../data/data";
import RevealAnimationWrapper from "../RevealAnimationWrapper";

const ThemeButton = () => {
  return (
    <div className="rounded-xl bg-black px-5 py-1 flex justify-center items-center">
      <FontAwesomeIcon icon={faMoon} size="2x" color="white" />
    </div>
  );
};

const NavItems = () => {
  return (
    <div className="flex gap-6">
      {DATA.nav.map((item, idx) => (
        <div
          key={idx}
          className="rounded-4xl border-[1px] border-gray-500 px-6 py-3 min-w-[200px] text-center"
        >
          <span className="text-2xl">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default function NavBar() {
  return (
    <RevealAnimationWrapper distance={-60} delay={1.65} className="flex justify-between">
      <ThemeButton />
      <NavItems />
    </RevealAnimationWrapper>
  );
}
