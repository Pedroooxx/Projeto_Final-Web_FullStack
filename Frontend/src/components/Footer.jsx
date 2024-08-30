const Header = () => {
  return (
    <div className="h-32 w-full flex justify-center bg-gray-950">
      <div className="flex w-full max-w-[1240px] items-center justify-between px-6">
        <img className="h-16" src="/favicon.png" alt="Logo" />
        <span>Projeto Final Fullstack - Pedro de Oliveira Machado</span>
        <a
          href="https://github.com/Pedroooxx/Projeto_Final-Web_FullStack" target="_blank"
          className="transition-all duration-300 hover:text-orange-600 hover:text-lg active:text-orange-200 lg:block sm:hidden"
        >
          Acessar Repositório
        </a>
      </div>
    </div>
  );
};

export default Header;
