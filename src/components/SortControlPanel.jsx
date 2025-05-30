import { useContext } from "react";
import constants from "../store/constants";
import BlockContext from "../store/blockContext";

const SortControlPanel = ({ startSimulation }) => {
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
        {constants.sortingAlgos.map((type) => (
          <label key={type} className="flex items-center gap-10">
            <input
              type="radio"
              name="sortingAlgorithm"
              value={type}
              className="accent-green-500 scale-125"
              checked={blockContext.sortingAlgo === type}
              onChange={(e) => blockContext.changeSortingAlgo(e.target.value)}
            />
            <span>{type.charAt(0).toUpperCase() + type.slice(1)} Sort</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-10 mt-6">
        <button
          id="start"
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-12 py-2 rounded cursor-pointer w-fit-content"
        >
          Start
        </button>

        <button
          id="reset"
          type="button"
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-2 rounded cursor-pointer w-fit-content"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default SortControlPanel;
