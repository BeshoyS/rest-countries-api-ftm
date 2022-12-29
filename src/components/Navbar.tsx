import { FC } from "react";
import { Link } from "react-router-dom";
import { TbMoon } from "react-icons/tb";
import { useTheme } from "../hooks/useTheme";

const Navbar: FC = () => {
  const [isDark, toggleHandler] = useTheme();
  return (
    <header className="bg-white text-sm text-veryDarkBlue-500 shadow-md dark:bg-darkBlue dark:text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-7 md:px-9">
        <Link to="/">
          <h1 className="text-lg font-extraBold">Where in the world?</h1>
        </Link>
        <button
          className="flex items-center gap-2 font-semiBold text-sm group"
          onClick={toggleHandler as () => void}
        >
          <TbMoon className="dark:fill-current group-hover:-rotate-[30deg] transition-transform duration-500" />
          <p>Dark Mode</p>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
