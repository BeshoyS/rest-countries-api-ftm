import { FC } from "react";
import { formatPopulation } from "../helper";
import { DataContextTypes } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

type Props = DataContextTypes;

const Card: FC<Props> = (props) => {
  const { name, population, flags, region, capital, cca3 } = props;
  const navigate = useNavigate();

  function navigateHandler() {
    navigate(`countries/${cca3.toLowerCase()}`);
  }

  return (
    <section
      onClick={navigateHandler}
      className="rounded-lg shadow-md bg-white overflow-hidden cursor-pointer dark:bg-darkBlue hover:scale-105 transition duration-300"
    >
      <img
        className="block w-full h-40 object-cover"
        src={flags.png ? flags.png : flags.svg}
        alt={`Flag of ${name.common}`}
      />
      <article className="p-6">
        <h2 className="text-lg font-extraBold mb-4">{name.common}</h2>
        <p className="text-base">
          <span className="font-semiBold">Population: </span>
          {formatPopulation(population)}
        </p>
        <p className="text-base">
          <span className="font-semiBold">Region: </span> {region}
        </p>
        <p className="text-base">
          <span className="font-semiBold">Capital: </span> {capital}
        </p>
      </article>
    </section>
  );
};

export default Card;
