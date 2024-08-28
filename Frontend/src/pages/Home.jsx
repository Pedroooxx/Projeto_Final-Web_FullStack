import Hero from "../components/Hero";

const Home = () => {
    return ( 
        <div className="h-[1280px] w-[100%] flex flex-col relative m-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <Hero />
        </div>

    );
    
}
 
export default Home;