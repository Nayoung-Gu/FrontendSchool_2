import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import "./homepage.css";

export default function Homepage({ username }) {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
