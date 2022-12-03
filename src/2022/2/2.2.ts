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
    'B X':1, //piedra
    'C X':2, //papel
    'A X':3, //tijera
    
    //DRAW
    'A Y':4,
    'B Y':5,
    'C Y':6,
    
    //WIN
    'C Z':7, //piedra
    'A Z':8, //papel
    'B Z':9, //tijera

}

// X loss 
// Y draw 
// Z win

//A X //piedra
//B Y //papel
//C Z //tijera
