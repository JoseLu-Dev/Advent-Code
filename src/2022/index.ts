import * as path from "path"

import { getMostCalories } from "./1/1.1"
import { getMostCaloriesOfFirstElves } from "./1/1.2"
import { getRockPaperScissorsPoints } from "./2/2.1"
import { getRockPaperScissorsPointsTopSecretStrategy } from "./2/2.2"
import { getRucksacksPrioritySum } from "./3/3.1"
import { getRucksacksGroupsPrioritySum } from "./3/3.2"
import { getNumberOfPairsFullyContainsOther } from "./4/4.1"
import { getNumberOfPairsContainsOther } from "./4/4.2"
import { rearrangeStacksAndShowTops } from "./5/5.1"
import { rearrangeStacksAndShowTopsCrateMover90001 } from "./5/5.2"
import { findMarkerPosition } from "./6/6.1"
import { findMarkerPositionSecondPart } from "./6/6.2"
import { getSpaceTaken } from "./7/7.1"
import { getSpaceOfSmallestFolderToDelete } from "./7/7.2"

adventCode2022()

async function adventCode2022(){
    console.log('--- Day 1: Calorie Counting ---')
    console.log('1.1: ' + await getMostCalories(path.join('src', '2022', '1', 'input.txt')))
    console.log('1.2: ' + await getMostCaloriesOfFirstElves(path.join('src', '2022', '1', 'input.txt'), 3))

    console.log('--- Day 2: Rock Paper Scissors ---')
    console.log('2.1: ' + await getRockPaperScissorsPoints(path.join('src', '2022', '2', 'input.txt')))
    console.log('2.2: ' + await getRockPaperScissorsPointsTopSecretStrategy(path.join('src', '2022', '2', 'input.txt')))

    console.log('--- Day 3: Rucksack Reorganization ---')
    console.log('3.1: ' + await getRucksacksPrioritySum(path.join('src', '2022', '3', 'input.txt')))
    console.log('3.2: ' + await getRucksacksGroupsPrioritySum(path.join('src', '2022', '3', 'input.txt'), 3))

    console.log('--- Day 4: Camp Cleanup ---')
    console.log('4.1: ' + await getNumberOfPairsFullyContainsOther(path.join('src', '2022', '4', 'input.txt')))
    console.log('4.2: ' + await getNumberOfPairsContainsOther(path.join('src', '2022', '4', 'input.txt')))

    console.log('--- Day 5: Supply Stacks ---')
    console.log('5.1: ' + await rearrangeStacksAndShowTops(path.join('src', '2022', '5', 'input.txt')))
    console.log('5.1: ' + await rearrangeStacksAndShowTopsCrateMover90001(path.join('src', '2022', '5', 'input.txt')))

    console.log('--- Day 6: Tuning Trouble ---')
    console.log('6.1: ' + await findMarkerPosition(path.join('src', '2022', '6', 'input.txt')))
    console.log('6.2: ' + await findMarkerPositionSecondPart(path.join('src', '2022', '6', 'input.txt')))

    console.log('--- Day 7: No Space Left On Device ---')
    console.log('7.1: ' + await getSpaceTaken(path.join('src', '2022', '7', 'input.txt')))
    console.log('7.2: ' + await getSpaceOfSmallestFolderToDelete(path.join('src', '2022', '7', 'input.txt'), 70000000, 30000000))

}
