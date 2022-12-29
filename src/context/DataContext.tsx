import { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
interface DataContextProviderTypes {
  children: ReactNode;
}

type countryName = {
  common: string;
  official: string;
};

export interface DataContextTypes {
  flags: {
    png: string;
    svg: string;
  };
  capital: string[];
  currencies: object;
  languages: object;
  borders: object;
  cca3: string;
  name: {
    common: countryName["common"];
    official: countryName["official"];
    nativeName: {
      eng: countryName;
    };
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
}

export const DataContext = createContext<DataContextTypes[] | null>(null);

export function DataContextProvider({ children }: DataContextProviderTypes) {
  const [data, setData] = useState<DataContextTypes[]>([]);
  async function getData() {
    const { data } = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,nativeName,population,region,subregion,captial,tld,currencies,languages,flags,cca3"
    );
    //sort by country alphabetically
    const sortedData = [...data].sort((a, b) =>
      a.name.common.toLowerCase() > b.name.common.toLowerCase() ? 1 : -1
    );
    setData(sortedData);
  }

  useEffect(() => {
    getData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
