import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Homepage() {
  return (
    <div>
      <Header />
      <p>id나 pw가 잘못되었습니다. 다시 로그인 해주세요.</p>
      <form action="">
        <input type="text" />
        <br />
        <input type="password" />
        <br />
      </form>
      <Footer />
    </div>
  );
}
