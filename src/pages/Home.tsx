import { FC, useContext, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { DataContext } from "../context/DataContext";

const Home: FC = () => {
  const countriesList = useContext(DataContext);
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const filteredList = countriesList?.filter(({ name, region }) => {
    if (query.length > 0) {
      return name.common.toLowerCase().startsWith(query.toLowerCase());
    } else if (selected.length > 0) {
      return region.toLowerCase() === selected.toLowerCase();
    } else {
      return name;
    }
  });
  return (
    <main className="container mx-auto px-4 py-12 text-sm md:px-9">
      <section className="md:flex md:justify-between md:mb-12">
        <Search query={query} setQuery={setQuery} />
        <Filter selected={selected} setSelected={setSelected} />
      </section>
      <section className="grid gap-12 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {filteredList?.map((country) => (
          <Card key={country.name.common} {...country} />
        ))}
      </section>
    </main>
  );
};

export default Home;
