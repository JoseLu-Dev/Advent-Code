import { readFileLines } from "../../common/readFileLines";

export async function getHighestScenicScore(inputFile: string) {

    const treeMatrix: number[][] = []
    let highestScenicScore: number = 0

    await readFileLines(inputFile, (line: string) => {
        treeMatrix.push(line.split('').map(t => +t))
    })

    for (let y = 0; y < treeMatrix.length; y++) {
        for (let x = 0; x < treeMatrix[y].length; x++) {
            const score = xScenicScore(treeMatrix, x, y) * yScenicScore(treeMatrix, x, y)

            if(score > highestScenicScore)
                highestScenicScore = score
        }

    }

    return highestScenicScore
}

export function xScenicScore(treeMatrix: number[][], x: number, y: number): number {
    
    let treesLeft = 0
    let treesRight = 0

    for (let index = x-1; index >= 0; index--) {
        treesLeft++
        if (treeMatrix[y][x] <= treeMatrix[y][index]) {
            break
        }
    }

    for (let index = x + 1; index < treeMatrix[y].length; index++) {
        treesRight++
        if (treeMatrix[y][x] <= treeMatrix[y][index]) {
            break
        }
    }

    return treesLeft * treesRight
}

export function yScenicScore(treeMatrix: number[][], x: number, y: number): number {

    let treesUp = 0
    let treesDown = 0

    for (let index = y-1; index >=0; index--) {
        treesUp++
        if (treeMatrix[y][x] <= treeMatrix[index][x]) {
            break
        }
    }

    for (let index = y + 1; index < treeMatrix.length; index++) {
        treesDown++
        if (treeMatrix[y][x] <= treeMatrix[index][x]) {
            break
        }
    }

    return treesUp * treesDown
}
