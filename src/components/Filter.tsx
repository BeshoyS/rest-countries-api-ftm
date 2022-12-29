import { Dispatch, FC, SetStateAction, SyntheticEvent, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdClose } from "react-icons/md";

type Props = {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter: FC<Props> = ({ selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function selectHandler(e: SyntheticEvent, region: string) {
    e.stopPropagation();
    setSelected(region);
    setIsOpen(false);
  }
  function closeHandler(e: SyntheticEvent) {
    e.stopPropagation();
    setSelected("");
    setIsOpen(false);
  }

  return (
    <section className=" font-semiBold relative w-fit">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-white rounded-md px-6 py-5 my-10 mx-auto shadow-md md:my-0 dark:bg-darkBlue"
      >
        <p className="text-left w-36">
          {selected ? selected : "Filter by Region"}
        </p>
        {selected === "" ? (
          <MdOutlineKeyboardArrowDown className="text-lg" />
        ) : (
          <MdClose
            onClick={closeHandler}
            className="text-lg hover:scale-150 transition-transform duration-200"
          />
        )}
      </button>
      {isOpen && (
        <ul className="absolute top-full mt-1 inset-x-0 flex flex-col gap-2 bg-white rounded-lg px-6 py-4 shadow-md dark:bg-darkBlue">
          {regions.map((region) => (
            <li
              key={region}
              className="cursor-pointer"
              onClick={(e) => selectHandler(e, region)}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Filter;
