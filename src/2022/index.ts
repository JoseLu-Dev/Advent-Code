import * as path from "path"

import { getMostCalories } from "./1/1.1"

adventCode2022()

async function adventCode2022(){
    console.log('--- Day 1: Calorie Counting ---')
    console.log('1.1: ' + await getMostCalories(path.join('src', '2022', '1', 'input.txt')))
}
