import { useContext } from "react";
import constants from "../store/constants";
import BlockContext from "../store/blockContext";

const VizControlPanel = ({ regenerateBlocks }) => {
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
          className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1"
          value={blockContext.numberOfBlocks}
          onChange={(e) => {
            blockContext.changeNumberOfBlocks(e.target.value);
            regenerateBlocks();
          }}
          required
        >
          {constants.numBlockValues.map((n) => (
            <option value={n} key={n}>
              {n}
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
          className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1"
          value={blockContext.speed}
          onChange={(e) => blockContext.changeSpeed(e.target.value)}
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
