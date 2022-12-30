import { useNavigate, useParams } from "react-router-dom";
import { DataContextTypes } from "../context/DataContext";
import { BsArrowLeft } from "react-icons/bs";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { formatPopulation, getObjectValues } from "../helper";

const Details: FC = () => {
  const { name: countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState<DataContextTypes>();
  const navigate = useNavigate();

  function navigateHandler(code: string) {
    navigate(`countries/${code.toLowerCase()}`);
  }
  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(
        `https://restcountries.com/v3.1/alpha/${countryName}?fields=name,nativeName,population,region,subregion,captial,tld,currencies,languages,flags,borders`,
        {
          signal: controller.signal,
        }
      )
      .then(({ data }) => setCountryDetails(data))
      .catch(() => {});

    return () => {
      // cancel the request
      controller.abort();
    };
  }, [countryName]);
  return (
    <main className="container mx-auto px-4 py-12 md:px-9">
      <div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 px-8 py-2 shadow-md rounded-sm bg-white dark:bg-darkBlue group"
        >
          <BsArrowLeft
            className="text-xl group-hover:-translate-x-2 duration-200"
            strokeWidth="0.5"
          />
          <span>Back</span>
        </button>
      </div>
      <section className="my-16 md:flex justify-between items-center">
        <div className="md:w-5/12">
          <img
            className="w-full"
            src={countryDetails?.flags.png}
            alt={countryDetails?.name.common}
          />
        </div>
        <article className="md:w-6/12 my-10">
          <h2 className="text-2xl font-extraBold">
            {countryDetails?.name.common}
          </h2>
          <article className="my-4 md:flex items-start justify-between gap-5">
            <div className="my-5 md:m-0">
              <p className="font-light mb-3">
                <span className="font-semiBold"> Native Name: </span>{" "}
                {countryDetails?.name.official}
              </p>
              <p className="font-light mb-3">
                <span className="font-semiBold"> Population: </span>
                {countryDetails && formatPopulation(countryDetails?.population)}
              </p>
              <p className="font-light mb-3">
                <span className="font-semiBold"> Region: </span>
                {countryDetails?.region}
              </p>
              <p className="font-light mb-3">
                <span className="font-semiBold">Sub Region: </span>
                {countryDetails?.subregion}
              </p>
              <p className="font-light mb-3">
                <span className="font-semiBold"> Capital: </span>
                {countryDetails?.capital[0]}
              </p>
            </div>
            <div className="my-5 md:m-0">
              <p className="font-light mb-3">
                <span className="font-semiBold"> Top Level Domain: </span>{" "}
                {countryDetails?.tld[0]}
              </p>
              <p className="font-light mb-3">
                <span className="font-semiBold"> Currencies: </span>
                {getObjectValues(countryDetails?.currencies)}
              </p>
              <p className="font-light mb-3">
                <span className="font-semiBold"> Languages: </span>
                {getObjectValues(countryDetails?.languages)}
              </p>
            </div>
          </article>
          <div className="lg:flex items-center gap-4 flex-wrap mt-10 md:mt-5">
            <span className="font-semiBold w-1/3">Border Countries: </span>{" "}
            <div className="flex flex-wrap items-center gap-3 my-2 text-center md:text-left">
              {countryDetails?.borders &&
              Object.keys(countryDetails?.borders)?.length ? (
                getObjectValues(countryDetails?.borders)
                  ?.split(", ")
                  .map((bd) => (
                    <button
                      onClick={() => navigateHandler(bd)}
                      key={bd}
                      className="text-sm px-6 py-1 shadow-md rounded-sm border-darkGray dark:bg-darkBlue hover:-translate-y-1 transition-transform duration-500"
                    >
                      {bd}
                    </button>
                  ))
              ) : (
                <p className="text-sm px-6 py-1 shadow-md rounded-sm border-darkGray dark:bg-darkBlue">
                  None
                </p>
              )}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Details;
