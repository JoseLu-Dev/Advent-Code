import { readFileLines } from "../../common/readFileLines";
import { FileStructureParser } from "./parseFileStructureFromCommands";
import { calculateFolderSize } from './calculateFolderSize';


export async function getSpaceTaken(inputFile: string) {
    
    let size = 0
    const parser: FileStructureParser = new FileStructureParser()
    
    await readFileLines(inputFile, (line: string) => {

        parser.parseFromCommands(line)
    })

    for (const dir of parser.directories) {
        const dirSize = calculateFolderSize(dir)

        if(dirSize <= 100000)
            size += dirSize
    } 

    return size
}

