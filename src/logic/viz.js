import appConfig from "./config";

export function getAnimationIntervalTime(
    numberOfBlocks,
    speed,
    sortingAlgo,
    sequenceLength
) {
    let numBlocksIndex = appConfig.NUM_BLOCKS_OPTIONS.indexOf(numberOfBlocks);
    let millisecondsTime = appConfig.ANIMATION_INTERVALS[sortingAlgo][speed][numBlocksIndex] / sequenceLength;
    return millisecondsTime;
}

export function createColorArray(
    numberOfBlocks,
    markedIndexArray = [],
    highlightPivot = false
) {
    const colorArray = Array.from({ length: numberOfBlocks }, (_, index) => {
        return markedIndexArray.includes(index) ? appConfig.COLORS.ORANGE : appConfig.COLORS.YELLOW;
    });
    if (highlightPivot) colorArray[markedIndexArray.slice(-1)[0]] = appConfig.COLORS.BLUE;
    return colorArray;
}



