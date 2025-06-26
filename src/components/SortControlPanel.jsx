import { useContext } from "react";
import appConfig from "../logic/config";
import BlockContext from "../store/blockContext";
import loaderImage from "../images/loader.gif";

const SortControlPanel = ({ startSimulation, resetSimulation }) => {
  const blockContext = useContext(BlockContext);

  const submitHandler = (e) => {
    e.preventDefault();
    startSimulation();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col bg-gray-900 rounded-lg shadow-md w-fit-content h-full justify-evenly"
    >
      <div className="flex flex-col gap-1r">
        {appConfig.SORTING_ALGO_OPTIONS.map((algo) => (
          <label key={algo} className="flex items-center gap-10 text-xl">
            <input
              type="radio"
              name="sortingAlgorithm"
              value={algo}
              className="accent-green-500 scale-125 disabled-radio"
              checked={blockContext.sortingAlgo === algo}
              onChange={(e) => blockContext.changeSortingAlgo(e.target.value)}
              disabled={blockContext.simStatus !== "ready"}
            />
            <span>{algo.charAt(0) + algo.slice(1).toLowerCase()} Sort</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-10 mt-6">
        <button
          id="start-btn"
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-12 py-2 rounded cursor-pointer w-fit-content show disabled-btn"
          disabled={blockContext.simStatus !== "ready"}
        >
          Start
        </button>

        <button
          id="loading-btn"
          type="button"
          className="bg-green-600 px-12 rounded cursor-pointer w-fit-content disabled-btn opacity-100 hide"
          disabled
        >
          <img src={loaderImage} alt="Preparing" className="w-10 h-10" />
        </button>

        <button
          id="reset"
          type="button"
          onClick={() => resetSimulation()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-2 rounded cursor-pointer w-fit-content"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default SortControlPanel;
