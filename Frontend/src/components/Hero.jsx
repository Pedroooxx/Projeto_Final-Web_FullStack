const Hero = () => {
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
      <div className="flex w-full max-w-[1240px] min-h-80">
        <div className="w-full h-full px-8 lg:grid lg:grid-cols-2 lg:gap-16 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-8">
          <div className="flex flex-col items-center justify-center text-left">
            <h1 className="w-full font-sans lg:text-5xl font-light mb-8 sm:text-xl">
              <strong className="lg:text-7xl text-orange-600 font-black sm:text-2xl">
                API Fullstack
              </strong>
              <br /> de personagens da série
              <strong className="font-bold mt-4"> Game Of Thrones</strong>
            </h1>
            <p className="font-sans text-justify font-light lg:text-xl lg:leading-8 sm:text-lg sm:leading-6">
              Projeto final da disciplina de Fullstack onde personagens da série
              podem ser armazenados em uma BD MySQL através da tecnologia Docker
              em uma API Back-End node.js integrada em uma aplicação Front-End
              React com Tailwind CSS.
            </p>
          </div>
          <div className="px-2">
            <img
              src="/banner.png"
              alt="Dragons Banner"
              className="w-full max-w-[540px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
