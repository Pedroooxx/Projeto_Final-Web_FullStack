import { useEffect, useState } from "react";
import api from "../services/api";

const CharacterList = () => {
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
    <div>
      <h2>Lista de Personagens</h2>
      <p>Veja aqui a lista dos personagens de Game Of Thrones.</p>
      <ul>
        {characterList?.map((character) => (
          <li key={character.id}>
            {character?.name}, {character?.fullname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
