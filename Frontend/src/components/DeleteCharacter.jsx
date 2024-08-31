import { useState } from "react";
import api from "../services/api";

const DeleteCharacter = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("authToken");

    if (!token) {
      setMessage("Token de autenticação não encontrado. Faça login novamente.");
      console.log("Token não encontrado.");
      return;
    }

    // Log do ID que será enviado
    console.log("ID do personagem a ser excluído:", id);

    try {
      const response = await api.delete(`/characters/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // Log da resposta do servidor
      console.log("Resposta do servidor:", response.data);

      setMessage(`Personagem excluído com sucesso!`);

      // Limpar campo após sucesso
      setId("");

      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      // Log do erro com detalhes
      console.error(
        "Erro ao excluir personagem:",
        error.response ? error.response.data : error.message
      );
      setMessage(
        `Erro ao excluir personagem: ${
          error.response ? error.response.data.message : error.message
        }`
      );

      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center text-left font-sans p-8 bg-white rounded-3xl bg-opacity-5 xl:mb-0 lg:mb-8 sm:mb-9">
      <h1 className="w-full lg:text-4xl font-bold sm:text-2xl">
        Excluir personagem da lista:
      </h1>
      <form onSubmit={handleDelete} className=" text-left">
        <div className="flex flex-col gap-2 mb-4">
          <strong className="text-lg font-light">ID do Personagem:</strong>
          <input
            type="text"
            placeholder="Digite o ID do Personagem..."
            className="rounded-full px-4 py-3 bg-white text-black"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
      </form>
      <div className="w-full flex items-center">
        <button
          type="submit"
          className="py-2 px-4 bg-red-600 text-white rounded-full hover:bg-red-900 border-0 transition-all duration-300"
          onClick={handleDelete}
        >
          Excluir Personagem
        </button>
        {message && (
          <div className="text-center py-2 px-4 bg-gray-800 text-white rounded-full ml-4">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteCharacter;
