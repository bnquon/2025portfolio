import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

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
      <div className="rounded-4xl border-[1px] border-gray-500 px-6 py-3 min-w-[200px] text-center">
        <span className="text-2xl">About</span>
      </div>
      <div className="rounded-4xl border-[1px] border-gray-500 px-6 py-3 min-w-[200px] text-center">
        <span className="text-2xl">Projects</span>
      </div>
      <div className="rounded-4xl border-[1px] border-gray-500 px-6 py-3 min-w-[200px] text-center">
        <span className="text-2xl">Reach Out</span>
      </div>
    </div>
  );
};

export default function NavBar() {
  return (
    <div className="flex justify-between">
      <ThemeButton />
      <NavItems />
    </div>
  );
}
