import { readFileLines } from "../../common/readFileLines";

export async function getNumberOfPairsFullyContainsOther(inputFile: string) {

    let fullyContains = 0

    await readFileLines(inputFile, (line: string) => {

        const zoneRanges = line.split(',')
        const zoneRangeFirstElf = zoneRanges[0].split('-')
        const zoneRangeSecondElf = zoneRanges[1].split('-')

        if (zoneFullyOverlaps(zoneRangeFirstElf, zoneRangeSecondElf)
            || zoneFullyOverlaps(zoneRangeSecondElf, zoneRangeFirstElf)) {
            fullyContains++
        }

    })

    return fullyContains
}

function zoneFullyOverlaps(overlappedZone: string[], zone: string[]) {
    const startOverlappedZone = +overlappedZone[0]
    const endOverlappedZone = +overlappedZone[1]
    const startZone = +zone[0]
    const endZone = +zone[1]

    if (startOverlappedZone>=startZone && endOverlappedZone<=endZone) {
        return true
    }

    return false
}

