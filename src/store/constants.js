const constants = {
    numBlockValues: [25, 50, 75, 100, 200],
    speedValues: ["s", "m", "f"],
    sortingAlgos: [
        "bubble",
        "insertion",
        "selection",
        "merge",
        "quick",
        "heap",
        "shell",
    ],
    sortingOrders: ["a", "d"],
    colors: {
        // For compared blocks
        orange: {
            fillStyle: "#FFBF00",
            borderStyle: "#FFFFFF",
        },
        // For pivot blocks (in heap/quick sort)
        blue: {
            fillStyle: "#0000FF",
            borderStyle: "#ADD8E6",
        },
        // For sorted blocks
        green: {
            fillStyle: "#32CD32",
            borderStyle: "#ADFF2F",
        },
        // For other blocks in running state
        yellow: {
            fillStyle: "#FFFF00",
            borderStyle: "#FFD700",
        },
        // For all blocks in ready state
        white: {
            fillStyle: "#FFFFFF",
            borderStyle: "#888888"
        }
    }
}

export default constants;