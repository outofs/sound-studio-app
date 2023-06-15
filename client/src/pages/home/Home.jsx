import "../../../src/";
import Cards from "../../components/cards/Cards";
import Hero from "../../components/hero/Hero";

import useFetch from "../../hooks/useFetch";
import "./home.css";
import Contacts from "../../components/contacts/Contacts";

const Home = () => {
  const { data, loading, error } = useFetch("services");

  return (
    <div>
      <Hero />
      {data.length === 0 || !data ? "Loading..." : <Cards data={data} />}
      <Contacts />
    </div>
  );
};

export default Home;
