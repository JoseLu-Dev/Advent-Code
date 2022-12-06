import { readFileLines } from "../../common/readFileLines";


export async function findMarkerPositionSecondPart(inputFile: string) {

    let position

    await readFileLines(inputFile, (line: string) => {

        position = findFirstMarkerPosition(line, 14)

    })

    return position
}

function findFirstMarkerPosition(stream: string, markerLength: number) {

    for (let index = 0; index < stream.length; index++) {

        if(!hasRepeatedLetter(stream.substring(index, index + markerLength)))
            return index + markerLength

    }

    return 0
}

function hasRepeatedLetter(stream: string): boolean {

    for (const letter of stream) {
        if(stream.split('').filter(e=>e==letter).length >= 2)
            return true
    }

    return false
}
