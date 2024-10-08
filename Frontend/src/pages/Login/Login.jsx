import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginBox from "../../components/LoginBox";

const Login = () => {
  return (
    <>
      <Header />
      <main className="w-[100%] flex flex-col">
        <LoginBox />
      </main>
      <Footer />
    </>
  );
};

export default Login;
