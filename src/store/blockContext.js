import { createContext, useState, useRef } from "react";

import appConfig from "../logic/config.js";
import BlockSet from "../logic/blockset.js";
import getSortingResults from "../logic/sort.js";
import { getAnimationIntervalTime, createColorArray } from "../logic/viz.js";

const BlockContext = createContext({
  numberOfBlocks: appConfig.NUM_BLOCKS_OPTIONS[0],
  speed: appConfig.SPEED_OPTIONS[appConfig.SPEED_OPTIONS.length - 1],
  sortingAlgo: appConfig.SORTING_ALGO_OPTIONS[0],
  sortingOrder: appConfig.SORTING_ALGO_OPTIONS[0],
  highlightPivot: false,
  simStatus: "ready",
  blockSet: new BlockSet(),
  changeNumberOfBlocks: (newValue) => { },
  changeSpeed: (newValue) => { },
  changeSortingAlgo: (newValue) => { },
  changeSortingOrder: (newValue) => { },
  startSimulation: (canvas) => { },
  pauseSimulation: () => { },
  stopSimulation: () => { },
  resetSimulation: () => { },
  generateNewBlocks: (canvas) => { },
});

export function BlockContextProvider(props) {
  const [numberOfBlocks, setNumberOfBlocks] = useState(appConfig.NUM_BLOCKS_OPTIONS[0]);
  const [speed, setSpeed] = useState(appConfig.SPEED_OPTIONS[appConfig.SPEED_OPTIONS.length - 1]);
  const [sortingAlgo, setSortingAlgo] = useState(appConfig.SORTING_ALGO_OPTIONS[0]);
  const [sortingOrder, setSortingOrder] = useState(appConfig.SORTING_ALGO_OPTIONS[0]);
  const [highlightPivot, setHighlightPivot] = useState(["QUICK", "HEAP"].includes(appConfig.SORTING_ALGO_OPTIONS[0]));
  const [simStatus, setSimStatus] = useState("ready");
  const [blockSet, setBlockSet] = useState(new BlockSet());

  const sortingInterval = useRef(null);

  function changeNumberOfBlocks(newValue) {
    newValue = parseInt(newValue);
    if (!(appConfig.NUM_BLOCKS_OPTIONS.includes(newValue))) {
      return;
    }
    setNumberOfBlocks(newValue);
  }

  function changeSpeed(newValue) {
    if (!(appConfig.SPEED_OPTIONS.includes(newValue))) {
      return;
    }
    setSpeed(newValue);
  }

  function changeSortingAlgo(newValue) {
    console.log(newValue)
    if (!(Object.values(appConfig.SORTING_ALGO_OPTIONS).includes(newValue))) {
      return;
    }
    setSortingAlgo(newValue);
    setHighlightPivot(["QUICK", "HEAP"].includes(newValue));
  }

  function changeSortingOrder(newValue) {
    if (!(appConfig.SORTING_ORDER_OPTIONS.includes(newValue))) {
      return;
    }
    setSortingOrder(newValue);
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
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    newBlockSet.drawBlocks(canvasCtx);
    setBlockSet(newBlockSet);
  }

  function clearSortingInterval() {
    if (sortingInterval.current) {
      clearInterval(sortingInterval.current);
      sortingInterval.current = null;
    }
  }

  function createEndingAnimation(canvas, lastSortSequence) {
    let beginFromBack = ["INSERTION", "QUICK", "HEAP"].includes(sortingAlgo);
    let greenCounter = 0;
    let canvasContext = canvas.getContext("2d");
    sortingInterval.current = setInterval(() => {
      if (greenCounter <= numberOfBlocks) {
        let colorArray;
        if (beginFromBack) {
          colorArray = Array(numberOfBlocks - greenCounter).fill(appConfig.COLORS.YELLOW).concat(Array(greenCounter).fill(appConfig.COLORS.GREEN));
        } else {
          colorArray = Array(greenCounter).fill(appConfig.COLORS.GREEN).concat(Array(numberOfBlocks - greenCounter).fill(appConfig.COLORS.YELLOW));
        }
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        lastSortSequence.drawBlocks(canvasContext, colorArray);
        greenCounter += 1;
      } else {
        clearSortingInterval();
        stopSimulation();
      }
    }, 500 / numberOfBlocks);
  }

  async function toggleLoading(show) {
    return new Promise((resolve) => {
      if (show) {
        document.getElementById("start-btn").style.display = "none";
        document.getElementById("loading-btn").style.display = "block";
        document.getElementById("start-btn2").style.display = "none";
        document.getElementById("loading-btn2").style.display = "block";
      } else {
        document.getElementById("start-btn").style.display = "block";
        document.getElementById("loading-btn").style.display = "none";
        document.getElementById("start-btn2").style.display = "block";
        document.getElementById("loading-btn2").style.display = "none";
      }
      // Assuming some delay for the loading state (adjust as needed)
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }

  async function startSimulation(canvas) {
    const canvasContext = canvas.getContext("2d");
    setSimStatus("running");
    await toggleLoading(true)
    const { sortSequences, compareSequences } = await getSortingResults(blockSet, sortingAlgo, sortingOrder);
    await toggleLoading(false);

    const animationIntervalTime = getAnimationIntervalTime(numberOfBlocks, speed, sortingAlgo, sortSequences.length);
    const lastSortSequence = sortSequences[sortSequences.length - 1];
    sortingInterval.current = setInterval(() => {
      if (sortSequences.length > 0) {
        let nextBlockSet = sortSequences.shift();
        let nextCompareSet = compareSequences.shift();
        let colorArray = createColorArray(
          numberOfBlocks,
          nextCompareSet,
          highlightPivot
        );
        // nextBlockSet.printBlocks();
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        nextBlockSet.drawBlocks(canvasContext, colorArray);
      } else {
        clearSortingInterval();
        createEndingAnimation(canvas, lastSortSequence);
      }
    }, animationIntervalTime);
  }

  function stopSimulation() {
    clearSortingInterval();
    setSimStatus("completed");
  }

  function pauseSimulation() {
    setSimStatus("paused");
  }

  function resetSimulation() {
    clearSortingInterval();
    setSimStatus("ready");
  }

  const currentBlockContext = {
    numberOfBlocks,
    speed,
    sortingAlgo,
    sortingOrder,
    highlightPivot,
    simStatus,
    blockSet,
    changeNumberOfBlocks,
    changeSpeed,
    changeSortingAlgo,
    changeSortingOrder,
    startSimulation,
    stopSimulation,
    pauseSimulation,
    resetSimulation,
    generateNewBlocks
  };

  return (
    <BlockContext.Provider value={currentBlockContext}>
      {props.children}
    </BlockContext.Provider>
  );
}

export default BlockContext;