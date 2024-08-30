const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-40 w-full z-50 flex justify-center backdrop-blur-sm">
      <div className="flex w-full max-w-[1240px] h-40 items-center justify-between px-6">
        <img className="h-24" src="/logo.png" alt="Logo" />
        <ul className="flex items-center justify-center gap-20">
          <li className="transition-all duration-300 hover:text-orange-600 hover:text-lg active:text-orange-200 lg:block sm:hidden">
            <a href="/">Página inicial</a>
          </li>
          <li
            className="flex items-center py-2 px-4 text-white rounded-full cursor-pointer bg-purple-600 transition-all duration-300
          hover:bg-orange-600 hover:px-8 active:bg-orange-200 active:text-slate-500"
          >
            <a href="/login" className="block">
              Entrar
            </a>
            <i className="fi fi-sr-arrow-circle-right ml-2 mt-1"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
