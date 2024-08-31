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
    <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center justify-center pb-16 text-slate-900 font-sans">
      <div className="pb-8 lg:px-0 sm:px-8">
        <h2 className="lg:text-6xl sm:text-2xl lg:text-center sm:text-left font-bold text-purple-600 mb-2">
          Lista de Personagens
        </h2>
        <p className="lg:text-xl sm:text-lg lg:text-center sm:text-justify">
          Veja aqui a lista dos personagens de Game Of Thrones bem como algumas
          simples informações sobre eles.
        </p>
      </div>
      <div className="min-h-60 bg-slate-100 rounded-3xl mx-8 p-8">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left hidden lg:table-cell">Nome Completo</th>
            </tr>
          </thead>
          <tbody>
            {characterList?.map((character) => (
              <tr key={character.id}>
                <td className="border px-4 py-2">{character?.id}</td>
                <td className="border px-4 py-2">{character?.name}</td>
                <td className="border px-4 py-2 hidden lg:table-cell">{character?.fullname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CharacterList;
