import { useState } from "react";
import api from "../services/api";

const UpdateCharacter = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState("");
  const [house, setHouse] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!id || isNaN(id)) {
      setMessage("ID inválido. Deve ser um número.");
      return;
    }

    const token = localStorage.getItem("authToken");

    if (!token) {
      setMessage("Token de autenticação não encontrado. Faça login novamente.");
      console.log("Token não encontrado.");
      return;
    }

    setLoading(true);

    try {
      // Envia a atualização para o backend
      const response = await api.put(
        `/characters/${id}`,
        { name, fullname, house, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Resposta do servidor:", response.data);

      setMessage("Personagem atualizado com sucesso!");
      setName("");
      setFullname("");
      setHouse("");
      setStatus("");

      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error(
        "Erro ao atualizar personagem:",
        error.response ? error.response.data : error.message
      );
      setMessage(
        `Erro ao atualizar personagem: ${
          error.response ? error.response.data.message : error.message
        }`
      );

      setTimeout(() => {
        setMessage("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-left font-sans sm:px-8 mb-12">
      <h1 className="w-full lg:text-5xl font-bold mb-4 sm:text-2xl">
        Editar personagem:
      </h1>
      <form onSubmit={handleSubmit} className="w-full text-left flex flex-col">
        <div className="flex flex-col gap-2">
          <strong className="text-lg font-light">ID do Personagem:</strong>
          <input
            type="text"
            placeholder="Digite o ID do Personagem..."
            className="rounded-full px-4 py-3 bg-white text-black w-60"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <strong className="text-lg font-light mt-4">
            Complete os campos com os novos valores:
          </strong>
          <div className="w-full lg:grid lg:grid-cols-4 lg:gap-8 text-left sm:flex sm:flex-col">
            <div className="flex flex-col gap-2 mb-4">
              <strong className="text-lg font-light">Nome:</strong>
              <input
                type="text"
                placeholder="Digite o Nome..."
                className="rounded-full px-4 py-3 bg-white text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <strong className="text-lg font-light">Nome Completo:</strong>
              <input
                type="text"
                placeholder="Digite o Nome com títulos..."
                className="rounded-full px-4 py-3 bg-white text-black"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <strong className="text-lg font-light">Casa:</strong>
              <input
                type="text"
                placeholder="Digite o Casa..."
                className="rounded-full px-4 py-3 bg-white text-black"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <strong className="text-lg font-light">Estado Atual:</strong>
              <input
                type="text"
                placeholder="Digite Ex: (Vivo; Morto; Preso)..."
                className="rounded-full px-4 py-3 bg-white text-black"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center mt-4">
          <button
            type="submit"
            className="py-2 px-4 bg-orange-600 text-white rounded-full border-0 hover:bg-purple-600 transition-all duration-300"
          >
            Atualizar Personagem
          </button>
          {message && (
            <div className="text-center py-2 px-4 bg-gray-800 text-white rounded-full ml-4">
              {message}
            </div>
          )}
        </div>
        {loading && <p className="text-center mt-4">Carregando...</p>}
      </form>
    </div>
  );
};

export default UpdateCharacter;
