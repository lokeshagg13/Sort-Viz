import constants from "../store/constants";

export function getAnimationIntervalTime(
    numberOfBlocks,
    speed,
    sortingAlgo,
    sequenceLength
) {
    let mapping = {
        bubble: {
            s: [50000, 100000, 500000, 1000000, 5000000],
            m: [10000, 50000, 100000, 500000, 1000000],
            f: [5000, 10000, 1000, 1000, 1000],
        },
        selection: {
            s: [50000, 100000, 500000, 1000000, 5000000],
            m: [10000, 50000, 100000, 500000, 1000000],
            f: [5000, 10000, 1000, 1000, 1000],
        },
        insertion: {
            s: [50000, 100000, 500000, 1000000, 5000000],
            m: [10000, 50000, 100000, 500000, 1000000],
            f: [5000, 10000, 1000, 1000, 1000],
        },
        merge: {
            s: [25000, 25000, 25000, 25000, 25000],
            m: [10000, 10000, 10000, 10000, 10000],
            f: [5000, 5000, 5000, 5000, 5000],
        },
        quick: {
            s: [5000, 10000, 50000, 100000, 500000],
            m: [1000, 5000, 10000, 50000, 100000],
            f: [7500, 2500, 1000, 1000, 1000],
        },
        heap: {
            s: [50000, 100000, 500000, 1000000, 5000000],
            m: [10000, 50000, 100000, 500000, 1000000],
            f: [5000, 10000, 1000, 1000, 1000],
        },
        shell: {
            s: [50000, 100000, 500000, 1000000, 5000000],
            m: [10000, 50000, 100000, 500000, 1000000],
            f: [5000, 10000, 1000, 1000, 1000],
        },
    };
    let numBlocksIndex = constants.numBlockValues.indexOf(numberOfBlocks);
    let millisecondsTime = mapping[sortingAlgo][speed][numBlocksIndex] / sequenceLength;
    return millisecondsTime;
}

export function createColorArray(
    numberOfBlocks,
    markedIndexArray = [],
    highlightPivot = false
) {
    const colorArray = Array.from({ length: numberOfBlocks }, (_, index) => {
        return markedIndexArray.includes(index) ? "#FFBF00" : "yellow";
    });
    if (highlightPivot) colorArray[markedIndexArray.slice(-1)[0]] = "blue";
    return colorArray;
}



