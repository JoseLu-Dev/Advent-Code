import { readFileLines } from "../../common/readFileLines";

export async function getRockPaperScissorsPoints(inputFile: string) {

    let points = 0

    await readFileLines(inputFile, (line: string) => {
        points += possibilities[line as keyof typeof possibilities]
    })

    return points
}

const possibilities = {

    //LOSS
    'B X':1,
    'C Y':2,
    'A Z':3,
    
    //DRAW
    'A X':4,
    'B Y':5,
    'C Z':6,

    //WIN
    'C X':7,
    'A Y':8,
    'B Z':9,

}