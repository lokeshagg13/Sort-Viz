import { useContext } from "react";
import constants from "../../store/constants";
import BlockContext from "../../store/blockContext";

function SortControlRow() {
  const blockContext = useContext(BlockContext);

  return (
    <div className="mt-4">
      <label
        htmlFor="sortingAlgorithm"
        className="block mb-1 font-medium text-white"
      >
        Sorting Algorithm
      </label>
      <select
        id="sortingAlgorithm"
        name="sortingAlgorithm"
        className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 w-full"
        value={blockContext.sortingAlgo}
        onChange={(e) => blockContext.changeSortingAlgo(e.target.value)}
        required
      >
        {constants.sortingAlgos.map((type) => (
          <option value={type} key={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)} Sort
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortControlRow;
