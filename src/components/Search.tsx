import { Dispatch, FC, SetStateAction } from "react";
import { IoMdSearch } from "react-icons/io";

type Props = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const Search: FC<Props> = ({ query, setQuery }) => {
  return (
    <label
      className="bg-white flex items-center rounded-md gap-7 px-7 py-3 shadow-md md:w-2/5 dark:bg-darkBlue"
    >
      <span className="sr-only">Search</span>
      <IoMdSearch className="text-darkGray text-3xl opacity-50 dark:text-white" />
      <input
        className=" w-full font-semiBold text-veryDarkBlue-500 caret-bor caret-current placeholder:text-darkGray opacity-50
        focus:outline-none dark:bg-transparent dark:placeholder:text-white dark:text-white"
        placeholder="Search for a country..."
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </label>
  );
};

export default Search;
