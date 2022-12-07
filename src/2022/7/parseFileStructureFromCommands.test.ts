import { FileStructureParser } from './parseFileStructureFromCommands';
import { DirTree } from './dirTree';

const commands = `$ cd /
$ ls
dir a
dir d
$ cd a
$ ls
dir e
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`


describe('should parse files and folders', () => {

    const commandParser = new FileStructureParser()
    const currentDir = {} as DirTree
    commandParser.currentDir = currentDir

    it('parses a file', async () => {
        const file = commandParser.parseFile('8033020 d.log')

        expect(file.name).toBe('d.log')
        expect(file.isFolder).toBe(false)
        expect(file.size).toBe(8033020)
        expect(file.parent).toBe(currentDir)
    })

    it('parses a folder', async () => {
        const folder = commandParser.parseFile('dir e')

        expect(folder.name).toBe('e')
        expect(folder.isFolder).toBe(true)
        expect(folder.parent).toBe(currentDir)
    })

})

describe('should move between folders', () => {

    it('go to parent folder', async () => {
        const commandParser = new FileStructureParser()
        const currentDir = {
            parent: {
                name: 'parent'
            }
        } as DirTree
        commandParser.currentDir = currentDir

        commandParser.goToDir('$ cd ..')

        expect(commandParser.currentDir.name).toBe('parent')
    })

    it('go to child folder', async () => {
        const commandParser = new FileStructureParser()
        const currentDir = {
            children: [
                {
                    name: 'bastardChild',
                    isFolder: true
                },
                {
                    name: 'child',
                    isFolder: true
                }
            ]
        } as DirTree
        commandParser.currentDir = currentDir

        commandParser.goToDir('$ cd child')

        expect(commandParser.currentDir.name).toBe('child')
    })

})

describe('parseFromCommands', () => {
    
    /*
    - / (dir)
      - a (dir)
        - e (dir)
          - i (file, size=584)
      - d (dir)
        - j (file, size=4060174)
        - d.log (file, size=8033020)
        - d.ext (file, size=5626152)
        - k (file, size=7214296)
    */
    it('should return a list of directories', async () => {

        const commandParser = new FileStructureParser()
        const dirs = commandParser.parseFromCommands(commands)

        expect(commandParser.baseDir.children).toHaveLength(2)
        expect(commandParser.baseDir.children?.[1].children).toHaveLength(4)

        expect(dirs).toHaveLength(3)
    })
})


