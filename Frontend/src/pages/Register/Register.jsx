import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RegisterBox from "../../components/RegisterBox";

const Login = () => {
  return (
    <>
      <Header />
      <main className="w-[100%] flex flex-col">
        <RegisterBox />
      </main>
      <Footer />
    </>
  );
};

export default Login;
