import { createContext, useState } from "react";

import constants from "./constants.js";
import BlockSet from "../logic/blockset.js";

const BlockContext = createContext({
  numberOfBlocks: constants.numBlockValues[0],
  speed: constants.speedValues[constants.speedValues.length - 1],
  sortingAlgo: constants.sortingAlgos[0],
  isSimulationRunning: false,
  blockSet: new BlockSet(),
  changeNumberOfBlocks: (newValue) => { },
  changeSpeed: (newValue) => { },
  changeSortingAlgo: (newValue) => { },
  startSimulation: () => { },
  pauseSimulation: () => { },
  stopSimulation: () => { },
  generateNewBlocks: () => { },
});

export function BlockContextProvider(props) {
  const [numberOfBlocks, setNumberOfBlocks] = useState(constants.numBlockValues[0]);
  const [speed, setSpeed] = useState(constants.speedValues[constants.speedValues.length - 1]);
  const [sortingAlgo, setSortingAlgo] = useState(constants.sortingAlgos[0]);
  const [simStatus, setSimStatus] = useState("stopped");
  const [blockSet, setBlockSet] = useState(new BlockSet());

  function changeNumberOfBlocks(newValue) {
    newValue = parseInt(newValue);
    if (!(constants.numBlockValues.includes(newValue))) {
      return;
    }
    setNumberOfBlocks(newValue);
  }

  function changeSpeed(newValue) {
    if (!(constants.speedValues.includes(newValue))) {
      return;
    }
    setSpeed(newValue);
  }

  function changeSortingAlgo(newValue) {
    if (!(constants.sortingAlgos.includes(newValue))) {
      return;
    }
    setSortingAlgo(newValue);
  }

  function generateNewBlocks(canvas) {
    if (!canvas) return;
    const canvasCtx = canvas.getContext("2d");
    if (!canvasCtx) return;
    const blockOffset = 0;
    const blockWidth = canvas.width / numberOfBlocks - blockOffset;
    const blockUnitHeight = canvas.height / numberOfBlocks;

    const newBlockSet = new BlockSet(
      numberOfBlocks,
      [],
      blockWidth,
      blockUnitHeight,
      blockOffset
    );
    newBlockSet.createNewBlocks(canvas.height);
    newBlockSet.drawBlocks(canvasCtx);
    setBlockSet(newBlockSet);
  }

  function startSimulation() {
    setSimStatus("running");
  }

  const currentBlockContext = {
    numberOfBlocks,
    speed,
    sortingAlgo,
    simStatus,
    blockSet,
    changeNumberOfBlocks,
    changeSpeed,
    changeSortingAlgo,
    startSimulation,
    generateNewBlocks
  };

  return (
    <BlockContext.Provider value={currentBlockContext}>
      {props.children}
    </BlockContext.Provider>
  );
}

export default BlockContext;