import { DirTree } from './dirTree';
export class FileStructureParser {

    currentDir: DirTree = { isFolder: true, name: '/', children: [], parent: null as unknown as DirTree }
    baseDir: DirTree = this.currentDir

    directories: DirTree[] = []

    parseFromCommands(commandLines: string) {
        const commands: string[] = commandLines.split('\n')

        for (const command of commands) {

            if (command.includes('$ ls') || command.includes('$ cd /'))
                continue

            if (command.includes('$ cd')) {
                this.goToDir(command)
                continue
            }

            this.currentDir.children?.push(this.parseFile(command))

        }

        return this.directories

    }

    goToDir(line: string) {

        const goTo = line.split(' ')[2]

        if (goTo === '..') {
            if(!this.currentDir.parent)
                return
            this.currentDir = this.currentDir.parent
            return
        }

        this.currentDir = this.currentDir.children?.filter(d => d.name === goTo && d.isFolder === true)[0] as DirTree

    }

    parseFile(line: string): DirTree {
        if (line.includes('dir')){
            const folder = { isFolder: true, name: line.split(' ')[1], children: [], parent: this.currentDir }
            this.directories.push(folder)
            return folder
        }
        return { isFolder: false, name: line.split(' ')[1], size: +line.split(' ')[0], parent: this.currentDir }
    }

}




