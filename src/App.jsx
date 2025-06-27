import Footer from "./components/Footer";
import MainPanel from "./components/MainPanel";
import HeaderImage from "./images/header.png";

function App() {
  return (
    <div className="flex flex-col app bg-black min-h-screen">
      <div className="flex p-4 items-center justify-center mb-4">
        <img src={HeaderImage} alt="Sort Viz" width={500} />
      </div>
      <MainPanel />
      <Footer />
    </div>
  );
}

export default App;
