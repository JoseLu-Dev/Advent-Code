import { readFileLines } from "../../common/readFileLines";

export async function getMostCaloriesOfFirstElves(inputFile: string, elves: number) {

    const caloriesPerElf: number[] = [0]
    let index = 0

    await readFileLines(inputFile, (line: string) => {
        if (line === '') {
            caloriesPerElf.push(0)
            index++
        }

        caloriesPerElf[index] += +line

    })



    return caloriesPerElf.sort(((a, b) => b - a)).slice(0, elves).reduce((a, b) => a + b)
}