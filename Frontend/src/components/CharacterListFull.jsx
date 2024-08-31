import { useEffect, useState } from "react";
import api from "../services/api";

const CharacterListFull = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Número de itens por página
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await api.get("/characters");
        // Log da resposta do servidor
        setCharacters(response.data);
      } catch (error) {
        // Log do erro com detalhes
        console.error(
          "Erro ao buscar personagens:",
          error.response ? error.response.data : error.message
        );
        setMessage(
          `Erro ao buscar personagens: ${
            error.response ? error.response.data.message : error.message
          }`
        );
      }
    };

    fetchCharacters();
  }, []);

  // Calculando o índice do último e primeiro item na página atual
  const indexOfLastCharacter = currentPage * itemsPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - itemsPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Função para alterar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Número total de páginas
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(characters.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full flex flex-col items-center justify-between text-left font-sans p-8 bg-white rounded-3xl bg-opacity-5">
      <div className="w-full max-w-[1240px] rounded-lg flex flex-col justify-between">
        <h1 className="lg:text-4xl font-bold sm:text-2xl mb-2">
          Lista de Personagens:
        </h1>
        {message && (
          <div className="text-center py-1 px-2 bg-gray-800">{message}</div>
        )}
        <div>
          <table className="table-auto w-full text-sm ">
            <thead>
              <tr>
                <th className="px-2 py-1 text-left">ID</th>
                <th className="px-2 py-1 text-left">Nome</th>
                <th className="px-2 py-1 text-left hidden lg:table-cell">
                  Nome Completo
                </th>
                <th className="px-2 py-1 text-left hidden lg:table-cell">
                  Casa
                </th>
                <th className="px-2 py-1 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentCharacters.map((character) => (
                <tr key={character.id}>
                  <td className="bg-gray-700 bg-opacity-20 px-2 py-1">
                    {character.id}
                  </td>
                  <td className="bg-gray-500 bg-opacity-20 px-2 py-1">
                    {character.name}
                  </td>
                  <td className="bg-gray-700 bg-opacity-20 px-2 py-1 hidden lg:table-cell">
                    {character.fullname}
                  </td>
                  <td className="bg-gray-500 bg-opacity-20 px-2 py-1 hidden lg:table-cell">
                    {character.house}
                  </td>
                  <td className="bg-gray-700 bg-opacity-20 px-2 py-1">
                    {character.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 mx-1 text-xs rounded-full border ${
                currentPage === number
                  ? "bg-purple-600 active:border-0 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterListFull;
