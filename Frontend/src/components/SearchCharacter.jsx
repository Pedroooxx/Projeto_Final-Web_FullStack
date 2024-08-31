import { useState } from "react";
import api from "../services/api";

const SearchCharacter = () => {
  const [searchId, setSearchId] = useState("");
  const [character, setCharacter] = useState(null);
  const [message, setMessage] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await api.get(`/characters/${searchId}`);
      if (response.data) {
        setCharacter(response.data);
        setMessage("");
      } else {
        throw new Error("Personagem não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar personagem:", error.response ? error.response.data : error.message);
      setMessage("ID não encontrada.");
      setCharacter(null);

      // Ocultar mensagem após 5 segundos
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center font-sans my-12 lg:gap-8 px-8">
      <form
        onSubmit={handleSearch}
        className="relative w-full max-w-80 flex flex-col items-center justify-center gap-4"
      >
        <input
          type="text"
          placeholder="Digite a ID..."
          className="w-full rounded-full px-4 py-3 bg-black text-white bg-opacity-90"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-1 h-10 w-10 p-4 flex items-center justify-center bg-orange-600 text-white rounded-full border-0 hover:bg-purple-600 transition-all duration-300"
        >
          <i className="fi fi-br-search"></i>
        </button>
      </form>

      {/* Quadro que estará sempre visível */}
      <div className="p-8 bg-black bg-opacity-90 text-left rounded-3xl w-full max-w-[400px]">
        <h2 className="lg:text-2xl font-bold text-nowrap mb-4 sm:text-lg">Detalhes do Personagem:</h2>
        {character ? (
          <>
            <p className="mb-1">
              <strong>ID:</strong> {character.id}
            </p>
            <p className="mb-1">
              <strong>Nome:</strong> {character.name}
            </p>
            <p className="mb-1">
              <strong>Nome Completo:</strong> {character.fullname}
            </p>
            <p className="mb-1">
              <strong>Casa:</strong> {character.house}
            </p>
            <p className="mb-1">
              <strong>Estado Atual:</strong> {character.status}
            </p>
          </>
        ) : (
          <p className="text-gray-500">Esperando pesquisa...</p>
        )}
      </div>

      {/* Mensagem de erro que agora aparece abaixo do quadro de personagem */}
      {message && (
        <div className="text-center py-2 px-4 bg-gray-800 text-white rounded-full mt-4" style={{ whiteSpace: "nowrap" }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default SearchCharacter;
