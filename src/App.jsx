import Header from "./components/header/header";
import Storeview from "./components/storeView/storeview";
import "./App.css";
import Cta from "./components/cta/cta";
import Footer from "./components/footer/footer";
import SideBar from "./components/sidebar/sidebar";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Header click={handleClick} />
      <SideBar open={open} click={handleClick} />
      <Storeview />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
