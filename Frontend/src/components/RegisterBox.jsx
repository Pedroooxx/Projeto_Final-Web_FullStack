import { useState } from "react";
import api from "../services/api";

const RegisterBox = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post("/signup", { username, password });

      
      setMessage("Registro realizado com sucesso!");

      
      setUsername("");
      setPassword("");

      
      console.log("Usuário registrado com sucesso!", response.data);

    } catch (error) {
      
      setMessage("Erro ao registrar! Verifique os campos.");
      console.error("Erro ao registrar:", error);
    }
  };

  return (
    <div
      className="w-full lg:h-[900px] sm:h-fit lg:pt-0 lg:pb-0 sm:pt-44 sm:pb-12 bg-center flex align-center justify-center"
      style={{
        backgroundSize: "100% 100%",
        backgroundPosition: "0px 0px",
        backgroundImage:
          "linear-gradient(295deg, #2A2A2AFF 0%, #000000FF 100%)",
      }}
    >
      <div className="flex w-full max-w-[1240px] min-h-[700px] items-center justify-center">
        <div className="lg:w-1/2 rounded-3xl bg-white bg-opacity-5 z-0 p-8 sm:h-auto sm:w-full sm:mx-8">
          <div className="w-full h-full flex flex-col z-1 text-left font-sans text-white">
            <h2 className="w-full lg:text-5xl font-light mb-4 sm:text-xl">
              <strong className="lg:text-5xl text-orange-600 font-black sm:text-2xl">
                Registro
              </strong>
            </h2>
            <p className="mb-12">
              Crie uma conta para adicionar personagens, editar ou excluir a sua vontade.
            </p>
            <form onSubmit={handleRegister}>
              <div className="flex flex-col gap-2 mb-4">
                <strong className="text-lg font-light">Nome de Usuário:</strong>
                <input
                  type="text"
                  placeholder="Digite aqui..."
                  className="rounded-full px-4 py-3 text-white"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <strong className="text-lg font-light">Senha:</strong>
                <input
                  type="password"
                  placeholder="Digite aqui..."
                  className="rounded-full px-4 py-3 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  type="submit"
                  className="flex items-center py-2 px-4 text-white rounded-full border-0 cursor-pointer bg-purple-600 transition-all duration-300 
                hover:bg-orange-600 hover:px-8 active:bg-orange-200 active:text-slate-500"
                >
                  Registrar
                  <i className="fi fi-sr-arrow-circle-right ml-2 mt-1"></i>
                </button>
                <span>ou <a href="/login" className="underline hover:text-orange-600 transition-all duration-300">Entre</a></span>
              </div>
              
              {message && (
                <div className="text-center py-2 px-4 bg-gray-800 text-white rounded-full">
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBox;
