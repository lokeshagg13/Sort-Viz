import { useContext } from "react";
import appConfig from "../../logic/config";
import BlockContext from "../../store/blockContext";

function SortOrderControlRow() {
  const blockContext = useContext(BlockContext);

  return (
    <div className="flex w-fit-content">
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
        {appConfig.SORTING_ORDER_OPTIONS.map((order) => (
          <option value={order} key={order}>
            {order.charAt(0) + order.slice(1).toLowerCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortOrderControlRow;
