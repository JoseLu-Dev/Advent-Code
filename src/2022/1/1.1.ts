import { readFileLines } from "../../common/readFileLines";

export async function getMostCalories(inputFile: string) {

    let totalMostCaloriesElf = 0
    let totalCaloriesCurrentElf = 0

    await readFileLines(inputFile, (line: string) => {
        if(line === ''){
            if(totalCaloriesCurrentElf > totalMostCaloriesElf){
                totalMostCaloriesElf = totalCaloriesCurrentElf
            }
            
            totalCaloriesCurrentElf = 0
            return
        }

        totalCaloriesCurrentElf += +line
    })

    if(totalCaloriesCurrentElf > totalMostCaloriesElf){
        totalMostCaloriesElf = totalCaloriesCurrentElf
    }

    return totalMostCaloriesElf
}