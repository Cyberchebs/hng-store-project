import Header from "./components/header/header";
import Storeview from "./components/storeView/storeview";
import "./App.css";
import Cta from "./components/cta/cta";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Storeview />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
