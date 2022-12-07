import { readFileLines } from "../../common/readFileLines";
import { FileStructureParser } from "./parseFileStructureFromCommands";
import { calculateFolderSize } from './calculateFolderSize';


export async function getSpaceOfSmallestFolderToDelete(inputFile: string, diskSpace: number, updateSpace: number) {

    let dirSizes: number[] = []
    const parser: FileStructureParser = new FileStructureParser()

    await readFileLines(inputFile, (line: string) => {

        parser.parseFromCommands(line)
    })

    for (const dir of parser.directories) {
        dirSizes.push(calculateFolderSize(dir))
    }
    const spaceTaken = calculateFolderSize(parser.baseDir)
    const spaceLeft = diskSpace - spaceTaken
    const spaceMinimumNeeded = updateSpace - spaceLeft

    const size = dirSizes.filter(a => a >= spaceMinimumNeeded).sort((a, b) => a - b)[0]
    return size
}

