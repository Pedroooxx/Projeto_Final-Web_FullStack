import { useState } from "react";
import api from "../services/api";

const CreateCharacter = () => {
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState("");
  const [house, setHouse] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("authToken");

    console.log("Dados a serem enviados:", { name, fullname, house, status });

    try {
      const response = await api.post(
        "/characters",
        { name, fullname, house, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      
      console.log("Resposta do servidor:", response.data);

      setMessage(`Personagem criado com sucesso!`);

      
      setName("");
      setFullname("");
      setHouse("");
      setStatus("");

      
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      
      console.error(
        "Erro ao criar personagem:",
        error.response ? error.response.data : error.message
      );
      setMessage(
        `Erro ao criar personagem: ${
          error.response ? error.response.data.message : error.message
        }`
      );

      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-left font-sans sm:px-8">
      <h1 className="w-full lg:text-5xl font-bold mb-4 sm:text-2xl">
        Adicionar personagem na lista:
      </h1>
      <p className="w-full font-light lg:text-xl lg:leading-8 sm:text-lg sm:leading-6">
        Saiba que para utilizar esta ferramenta bem como editar ou apagar algum
        personagem, é necessário{" "}
        <strong className="text-orange-600 font-bold">estar logado</strong>.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:grid lg:grid-cols-4 lg:gap-8 text-left mt-8 sm:flex sm:flex-col"
      >
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
      </form>
      <div className="w-full flex items-center">
        <button
          type="submit"
          className="py-2 px-4 bg-orange-600 text-white rounded-full border-0 hover:bg-purple-600 transition-all duration-300"
          onClick={handleSubmit}
        >
          Adicionar Personagem
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

export default CreateCharacter;
