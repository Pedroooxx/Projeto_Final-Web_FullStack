const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-gray-950">
      <div className="flex lg:flex-row w-full max-w-[1240px] items-center text-left justify-between p-8 gap-4 sm:flex-col">
        <img className="h-16" src="/favicon.png" alt="Logo" />
        <span>Projeto Final Fullstack - Pedro de Oliveira Machado</span>
        <a
          href="https://github.com/Pedroooxx/Projeto_Final-Web_FullStack" target="_blank"
          className="transition-all duration-300 hover:text-orange-600 hover:text-lg active:text-orange-200 lg:block"
        >
          Acessar Repositório
        </a>
      </div>
    </div>
  );
};

export default Footer;
