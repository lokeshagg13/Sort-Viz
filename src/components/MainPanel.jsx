import { useContext, useEffect, useRef } from "react";
import SortControlRow from "./small-screen/SortControlRow";
import SortControlPanel from "./SortControlPanel";
import VizControlPanel from "./VizControlPanel";
import ActionControlRow from "./small-screen/ActionControlRow";
import BlockContext from "../store/blockContext";
import SortOrderControlRow from "./large-screen/SortOrderControlRow";

function MainPanel() {
  const canvasRef = useRef();
  const blockContext = useContext(BlockContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const resizeCanvas = (defaultCall = false) => {
      canvas.width = Math.min(window.innerWidth * 0.9, 800);
      canvas.height = Math.min(window.innerHeight * 0.6, 600);

      const canvasCtx = canvas.getContext("2d");
      canvasCtx.fillStyle = "#000";
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
      if (!defaultCall) blockContext.generateNewBlocks(canvas);
    };
    resizeCanvas(true); // Initial resize
    window.addEventListener("resize", () => resizeCanvas(false)); // Handle window resize
    return () =>
      window.removeEventListener("resize", () => resizeCanvas(false));
  }, []);

  useEffect(() => {
    blockContext.generateNewBlocks(canvasRef.current);
  }, [blockContext.numberOfBlocks]);

  const startSimulation = () => {
    blockContext.startSimulation(canvasRef.current);
  };

  const resetSimulation = () => {
    blockContext.resetSimulation();
    blockContext.generateNewBlocks(canvasRef.current);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white mt-16 justify-center gap-2r">
      <div className="flex flex-col items-center px-4 gap-1r">
        <canvas
          id="canvas"
          ref={canvasRef}
          className="w-full max-w-800p border-2 border-white rounded-lg"
        />
        <div className="hide md:show w-full">
          <ActionControlRow
            startSimulation={startSimulation}
            resetSimulation={resetSimulation}
          />
        </div>
        <div className="hide md:show w-full">
          <SortControlRow />
        </div>
        <VizControlPanel />
        <div className="hide md-adjusted:show-block w-full">
          <SortOrderControlRow />
        </div>
      </div>
      <div className="md:hide w-fit-content flex justify-center items-center px-4">
        <SortControlPanel
          startSimulation={startSimulation}
          resetSimulation={resetSimulation}
        />
      </div>
    </div>
  );
}

export default MainPanel;
