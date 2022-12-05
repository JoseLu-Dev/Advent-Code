import { readFileLines } from "../../common/readFileLines";


export async function rearrangeStacksAndShowTopsCrateMover90001(inputFile: string) {
    let stacks: string[][] = []

    let stacksRead = false

    await readFileLines(inputFile, (line: string) => {

        if (line === '')
            return

        if (!stacksRead && line.includes('1'))
            stacksRead = true

        if (!stacksRead)
            return addLineToStacksList(line, stacks)

        if (line[1] === '1') {
            return
        }

        if (stacksRead) {
            rearrangeStacks(line, stacks)
        }

    })

    return getTopOfStacks(stacks)
}


function addLineToStacksList(line: string, stacks: string[][]) {
    let index = 0

    if (stacks.length === 0) {
        for (let x = 0; x < line.length / 4; x++) {
            stacks.push([])
        }
    }

    while (index < line.length) {

        let stackValue = line.substring(index, index + 4).replace('[', '').replace(']', '').trim()
        if (stackValue !== '')
            stacks[index / 4].unshift(stackValue)

        index += 4
    }
}

function getTopOfStacks(stacks: string[][]) {
    return stacks.map(s => s.pop()).join('')
}

function rearrangeStacks(instruction: string, stacks: string[][]) {
    const instructionsParsed = parseInstruction(instruction)

    const cratesMoving = []
    for (let i = 0; i < instructionsParsed.numberToMove; i++) {
        cratesMoving.unshift(stacks[instructionsParsed.from].pop() as string)
    }

    stacks[instructionsParsed.to].push(...cratesMoving)
}

function parseInstruction(instruction: string): { numberToMove: number, from: number, to: number } {
    const splitted = instruction.split('move')[1].split('from')

    const numberToMove = splitted[0].trim()

    const splittedTwice = splitted[1].split('to')
    const from = splittedTwice[0].trim()
    const to = splittedTwice[1].trim()

    return { numberToMove: +numberToMove, from: +from - 1, to: +to - 1 }
}