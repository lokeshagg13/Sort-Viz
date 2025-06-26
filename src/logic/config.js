const config = {
    NUM_BLOCKS_OPTIONS: [25, 50, 75, 100, 200],
    SPEED_OPTIONS: ["SLOW", "MEDIUM", "FAST"],
    SORTING_ALGO_OPTIONS: ["BUBBLE", "INSERTION", "SELECTION", "MERGE", "QUICK", "HEAP", "SHELL"],
    SORTING_ORDER_OPTIONS: ["ASCENDING", "DESCENDING"],
    ANIMATION_INTERVALS: {
        BUBBLE: {
            SLOW: [50000, 100000, 500000, 1000000, 5000000],
            MEDIUM: [10000, 50000, 100000, 500000, 1000000],
            FAST: [5000, 10000, 1000, 1000, 1000],
        },
        INSERTION: {
            SLOW: [50000, 100000, 500000, 1000000, 5000000],
            MEDIUM: [10000, 50000, 100000, 500000, 1000000],
            FAST: [5000, 10000, 1000, 1000, 1000],
        },
        SELECTION: {
            SLOW: [50000, 100000, 500000, 1000000, 5000000],
            MEDIUM: [10000, 50000, 100000, 500000, 1000000],
            FAST: [5000, 10000, 1000, 1000, 1000],
        },
        MERGE: {
            SLOW: [25000, 25000, 25000, 25000, 25000],
            MEDIUM: [10000, 10000, 10000, 10000, 10000],
            FAST: [5000, 5000, 5000, 5000, 5000],
        },
        QUICK: {
            SLOW: [5000, 10000, 50000, 100000, 500000],
            MEDIUM: [1000, 5000, 10000, 50000, 100000],
            FAST: [7500, 2500, 1000, 1000, 1000],
        },
        HEAP: {
            SLOW: [50000, 100000, 500000, 1000000, 5000000],
            MEDIUM: [10000, 50000, 100000, 500000, 1000000],
            FAST: [5000, 10000, 1000, 1000, 1000],
        },
        SHELL: {
            SLOW: [50000, 100000, 500000, 1000000, 5000000],
            MEDIUM: [10000, 50000, 100000, 500000, 1000000],
            FAST: [5000, 10000, 1000, 1000, 1000],
        },
    },
    COLORS: {
        // For compared blocks
        ORANGE: {
            FILL_STYLE: "#FFBF00",
            BORDER_STYLE: "#FFFFFF",
        },
        // For pivot blocks (in heap/quick sort)
        BLUE: {
            FILL_STYLE: "#0000FF",
            BORDER_STYLE: "#ADD8E6",
        },
        // For sorted blocks
        GREEN: {
            FILL_STYLE: "#32CD32",
            BORDER_STYLE: "#ADFF2F",
        },
        // For other blocks in running state
        YELLOW: {
            FILL_STYLE: "#FFFF00",
            BORDER_STYLE: "#FFD700",
        },
        // For all blocks in ready state
        WHITE: {
            FILL_STYLE: "#FFFFFF",
            BORDER_STYLE: "#888888"
        }
    }
}

export default config;