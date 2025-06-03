import { useContext } from "react";
import constants from "../../store/constants";
import BlockContext from "../../store/blockContext";

function SortControlRow() {
  const blockContext = useContext(BlockContext);

  return (
    <div className="flex flex-col gap-1r my-4">
      <div>
        <label
          htmlFor="sortingAlgorithm"
          className="block mb-1 font-medium text-white"
        >
          Sorting Algorithm
        </label>
        <select
          id="sortingAlgorithm"
          name="sortingAlgorithm"
          className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 w-full disabled-select"
          value={blockContext.sortingAlgo}
          onChange={(e) => blockContext.changeSortingAlgo(e.target.value)}
          disabled={blockContext.simStatus !== "ready"}
          required
        >
          {constants.sortingAlgos.map((type) => (
            <option value={type} key={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)} Sort
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="sortingOrder"
          className="block mb-1 font-medium text-white"
        >
          Sorting Order
        </label>
        <select
          id="sortingOrder"
          name="sortingOrder"
          className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 w-full disabled-select"
          value={blockContext.sortingOrder}
          onChange={(e) => blockContext.changeSortingOrder(e.target.value)}
          disabled={blockContext.simStatus !== "ready"}
          required
        >
          {constants.sortingOrders.map((order) => (
            <option value={order} key={order}>
              {order === "a" ? "Ascending" : "Descending"}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SortControlRow;
