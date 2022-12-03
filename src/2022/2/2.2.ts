import { readFileLines } from "../../common/readFileLines";

export async function getRockPaperScissorsPointsTopSecretStrategy(inputFile: string) {

    let points = 0

    await readFileLines(inputFile, (line: string) => {
        points += possibilities[line as keyof typeof possibilities]
    })

    return points
}

const possibilities = {

    //LOSS
    'B X':1,
    'C X':2,
    'A X':3,
    
    //DRAW
    'A Y':4,
    'B Y':5,
    'C Y':6,
    
    //WIN
    'C Z':7,
    'A Z':8,
    'B Z':9,
}