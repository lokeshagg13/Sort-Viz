import { useContext } from "react";
import BlockContext from "../../store/blockContext";
import loaderImage from "../../images/loader.gif";

function ActionControlRow({ startSimulation, resetSimulation }) {
  const blockContext = useContext(BlockContext);

  const submitHandler = (e) => {
    e.preventDefault();
    startSimulation();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-row justify-between">
        <button
          id="start-btn2"
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-12 xs:px-6 py-2 rounded cursor-pointer w-fit-content disabled-btn"
          disabled={blockContext.simStatus !== "ready"}
        >
          Start
        </button>

        <button
          id="loading-btn2"
          type="button"
          className="bg-green-600 px-12 xs:px-6 rounded cursor-pointer w-fit-content disabled-btn opacity-100 hide"
          disabled
        >
          <img src={loaderImage} alt="Preparing" className="w-10 h-10"/>
        </button>

        <button
          id="reset"
          type="button"
          onClick={() => resetSimulation()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-12 xs:px-6 py-2 rounded cursor-pointer w-fit-content"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default ActionControlRow;
