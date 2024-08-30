import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import api from "../services/api";

const Home = () => {
  const [/*characterList,*/ setCharacterList] = useState([]);

  useEffect(() => {
    api
      .get("/characters")
      .then((response) => {
        console.log(response.data);
        setCharacterList(response.data);
      })
      .catch((err) => {
        console.error("Lista de Personagens Vazia!" + err);
      });
  }, []);

  return (
    <main className="w-[100%] flex align-center justify-center">
      <Hero />
      {/*<div>
        <h2>Lista</h2>
        <p>Bla bla bla</p>
        <ul>
          {characterList?.map((character) => (
            <li key={character.id}>
              {character?.name}, {character?.fullname}
            </li>
          ))}
        </ul>
      </div>*/}
    </main>
  );
};

export default Home;
