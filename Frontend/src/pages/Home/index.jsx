import Hero from "../../components/Hero";
import CharacterList from "../../components/CharacterList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-[100%] flex flex-col">
        <Hero />
        <CharacterList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
