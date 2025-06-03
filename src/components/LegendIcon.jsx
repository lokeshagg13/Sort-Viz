import { useContext } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import BlockContext from "../store/blockContext";

function LegendIcon() {
  const blockContext = useContext(BlockContext);
  return (
    <div className="w-full flex justify-end">
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 250 }}
        overlay={
          <Tooltip
            id="legend-tooltip"
            className="border-1 border-gray-dark rounded bg-white p-2 shadow-tooltip"
          >
            <table className="w-full">
              <tbody className="flex flex-col gap-10">
                <tr>
                  <td>
                    <div className="w-5 h-5 bg-yellow border-1 border-gray" />
                  </td>
                  <td className="pl-3">Compared Blocks</td>
                </tr>
                {["quick", "heap"].includes(blockContext.sortingAlgo) && (
                  <tr>
                    <td>
                      <div className="w-5 h-5 bg-blue border-1 border-gray" />
                    </td>
                    <td className="pl-3">Pivot Block</td>
                  </tr>
                )}
              </tbody>
            </table>
          </Tooltip>
        }
      >
        <span className="icon cursor-pointer ms-2 text-muted">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 512 512"
            stroke="white"
            fill="white"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
        </span>
      </OverlayTrigger>
    </div>
  );
}

export default LegendIcon;
