import MainPanel from "./components/MainPanel";
import HeaderImage from "./images/header.png";

function App() {
  return (
    <div className="app p-4 bg-black min-h-screen">
      <div className="flex items-center justify-center mb-4">
        <img src={HeaderImage} alt="Sort Viz" width={500} />
      </div>
      <MainPanel />
    </div>
  );
}

export default App;
