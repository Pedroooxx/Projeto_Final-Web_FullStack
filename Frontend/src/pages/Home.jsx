import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import api from "../services/api";

const Home = () => {
  const [characterList, setCharacterList] = useState([]);

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
    <div className="h-[1280px] w-[100%] flex flex-col relative m-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Hero />
      <div>
        <h2>Lista</h2>
        <p>Bla bla bla</p>
        <ul>
          {characterList?.map((character) => (
            <li key={character.id}>
              {character?.name}, {character?.fullname}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
