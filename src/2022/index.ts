import * as path from "path"

import { getMostCalories } from "./1/1.1"
import { getMostCaloriesOfFirstElves } from "./1/1.2"
import { getRockPaperScissorsPoints } from "./2/2.1"

adventCode2022()

async function adventCode2022(){
    console.log('--- Day 1: Calorie Counting ---')
    console.log('1.1: ' + await getMostCalories(path.join('src', '2022', '1', 'input.txt')))
    console.log('1.2: ' + await getMostCaloriesOfFirstElves(path.join('src', '2022', '1', 'input.txt'), 3))

    console.log('--- Day 2: Rock Paper Scissors ---')
    console.log('1.1: ' + await getRockPaperScissorsPoints(path.join('src', '2022', '2', 'input.txt')))
}
