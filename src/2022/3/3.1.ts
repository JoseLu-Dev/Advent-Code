import { readFileLines } from "../../common/readFileLines";

export async function getRucksacksPrioritySum(inputFile: string) {

    let sumPriorities = 0

    await readFileLines(inputFile, (line: string) => {
        
        const rucksack1 = line.slice(0, line.length/2)
        const rucksack2 = line.slice(line.length/2, line.length)

        for (const item of rucksack1) {
            if(rucksack2.includes(item)){
                sumPriorities += getPriorityOfItem(item)
                return
            }
        }

    })

    return sumPriorities
}

function getPriorityOfItem(item: string): number{

    if(item === item.toLowerCase()){
        return item.charCodeAt(0) -96
    }

    return item.charCodeAt(0) -38
}