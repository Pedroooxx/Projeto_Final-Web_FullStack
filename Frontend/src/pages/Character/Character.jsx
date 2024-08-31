import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CreateCharacter from "../../components/CreateCharacter";
import DeleteCharacter from "../../components/DeleteCharacter";
import CharacterListFull from "../../components/CharacterListFull";
import UpdateCharacter from "../../components/UpdateCharacter";

const Character = () => {
  return (
    <>
      <Header />
      <main
        className="w-full bg-center"
        style={{
          backgroundSize: "100% 100%",
          backgroundPosition: "0px 0px",
          backgroundImage:
            "linear-gradient(185deg, #000000FF 0%, #2A2A2AFF 100%)",
        }}
      >
        <div className="flex flex-col w-full max-w-[1240px] mx-auto pt-40">
          <CreateCharacter />
          <div className="w-full xl:grid lg:grid-cols-2 my-12 px-8 lg:flex lg:flex-col xl:gap-8">
            <DeleteCharacter />
            <CharacterListFull />
          </div>
          <UpdateCharacter />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Character;
