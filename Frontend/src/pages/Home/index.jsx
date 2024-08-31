import Hero from "../../components/Hero";
import CharacterList from "../../components/CharacterList";
import SearchCharacter from "../../components/SearchCharacter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-[100%] flex flex-col">
        <Hero />
        <SearchCharacter />
        <CharacterList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
