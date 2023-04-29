import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Advanced from "./components/Advanced";
import Shortener from "./components/Shortener";

export default function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Shortener />
      <Advanced />

      <Boost />

      <Footer />
    </>
  );
}
