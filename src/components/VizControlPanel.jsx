import { useContext } from "react";
import constants from "../store/constants";
import BlockContext from "../store/blockContext";

const VizControlPanel = () => {
  const blockContext = useContext(BlockContext);

  return (
    <form className="flex flex-col md:flex-row justify-between items-center gap-5 w-full">
      <div className="flex gap-1r items-center md:flex-adjust">
        <label htmlFor="numOfBlocks" className="font-medium">
          Number of Blocks
        </label>
        <select
          id="numOfBlocks"
          name="numOfBlocks"
          className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 disabled-select"
          value={blockContext.numberOfBlocks}
          onChange={(e) => blockContext.changeNumberOfBlocks(e.target.value)}
          disabled={blockContext.simStatus !== "ready"}
          required
        >
          {constants.numBlockValues.map((n) => (
            <option value={n} key={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="gap-1r items-center hide md-adjusted:show-flex">
        <label
          htmlFor="sortingOrder"
          className="block mb-1 font-medium text-white w-full"
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

      <div className="flex gap-1r items-center md:flex-adjust">
        <label htmlFor="speed" className="font-medium">
          Speed
        </label>
        <select
          id="speed"
          name="speed"
          className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 disabled-select"
          value={blockContext.speed}
          onChange={(e) => blockContext.changeSpeed(e.target.value)}
          disabled={blockContext.simStatus !== "ready"}
          required
        >
          {constants.speedValues.map((speed) => (
            <option value={speed} key={speed}>
              {speed === "s" ? "Slow" : speed === "m" ? "Medium" : "Fast"}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default VizControlPanel;
