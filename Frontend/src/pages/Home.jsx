import Hero from "../components/Hero";
import CharacterList from "../components/CharacterList";

const Home = () => {
  return (
    <main className="w-[100%] flex flex-col">
      <Hero />
      <CharacterList />
    </main>
  );
};

export default Home;
