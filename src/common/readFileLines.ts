const fs = require('fs')
const readline = require('readline')

export async function readFileLines(filePath: string, lineCallback: (line: string) => void) {

    const fileStream = fs.createReadStream(filePath);
    
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    
    for await (const line of rl) {
        lineCallback(line)
    }
}
