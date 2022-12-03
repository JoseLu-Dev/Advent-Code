import { readFileLines } from "../../common/readFileLines";

export async function getRucksacksGroupsPrioritySum(inputFile: string, elvesPerGroup: number) {

    let sumPriorities = 0

    let groupRucksacks = new Array(elvesPerGroup)
    let index = 0

    await readFileLines(inputFile, (line: string) => {
        groupRucksacks[index % elvesPerGroup] = line

        if(index % elvesPerGroup === 2){
            const commonItem = getCommonItem(groupRucksacks)
            sumPriorities += getPriorityOfItem(commonItem[0])
        }

        index++
    })

    return sumPriorities
}

function getCommonItem(ruckSacks: string[]): string[]{

    const firstSack = ruckSacks.shift() as string
    const secondSack = ruckSacks.shift() as string


    let commonItems = getCommonItemsBetweenTwoSacks(firstSack, secondSack)

    for (const sack of ruckSacks) {
        commonItems = getCommonItemsBetweenTwoSacks(sack, commonItems.join(''))
    }

    return commonItems
}

function getCommonItemsBetweenTwoSacks(rucksack1: string, rucksack2: string): string[]{

    const items: string[] = []

    for (const item of rucksack1) {
        if(rucksack2.includes(item)){
            items.push(item)
        }
    }

    return items
}


function getPriorityOfItem(item: string): number {

    if (item === item.toLowerCase()) {
        return item.charCodeAt(0) - 96
    }

    return item.charCodeAt(0) - 38
}
