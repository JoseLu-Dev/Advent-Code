import { readFileLines } from "../../common/readFileLines";

export async function getVisibleTrees(inputFile: string) {

    const treeMatrix: number[][] = []
    let visibleTrees: number = 0

    await readFileLines(inputFile, (line: string) => {
        treeMatrix.push(line.split('').map(t => +t))

    })

    for (let y = 0; y < treeMatrix.length; y++) {
        for (let x = 0; x < treeMatrix[y].length; x++) {
            if (isVisibleInXAxis(treeMatrix, x, y) || isVisibleInYAxis(treeMatrix, x, y))
                visibleTrees++
        }

    }


    return visibleTrees
}

export function isVisibleInXAxis(treeMatrix: number[][], x: number, y: number): boolean {
    let visibleLeft: boolean = true
    let visibleRight: boolean = true

    for (let index = 0; index < x; index++) {
        if (treeMatrix[y][x] <= treeMatrix[y][index]) {
            visibleLeft = false
            break
        }
    }

    for (let index = x + 1; index < treeMatrix[y].length; index++) {
        if (treeMatrix[y][x] <= treeMatrix[y][index]) {
            visibleRight = false
            break
        }
    }

    return visibleLeft || visibleRight
}

export function isVisibleInYAxis(treeMatrix: number[][], x: number, y: number): boolean {

    let visibleUp: boolean = true
    let visibleDown: boolean = true

    for (let index = 0; index < y; index++) {
        if (treeMatrix[y][x] <= treeMatrix[index][x]) {
            visibleUp = false
            break
        }
    }

    for (let index = y + 1; index < treeMatrix.length; index++) {
        if (treeMatrix[y][x] <= treeMatrix[index][x]) {
            visibleDown = false
            break
        }
    }

    return visibleUp || visibleDown
}

export function isAtEdge(treeMatrix: number[][], x: number, y: number): boolean {

    if (treeMatrix.length - 1 <= y || y <= 0)
        return true

    if (treeMatrix[y].length - 1 <= x || x <= 0)
        return true

    return false
}