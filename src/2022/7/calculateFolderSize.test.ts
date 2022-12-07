import { FileStructureParser } from './parseFileStructureFromCommands';
import { DirTree } from './dirTree';
import { calculateFolderSize } from './calculateFolderSize';

const folderStructure: DirTree = {
    isFolder: true,
    children: [
        {
            isFolder: false,
            size: 60
        } as unknown as DirTree,
        {
            isFolder: true,
            children: [
                {
                    isFolder: false,
                    size: 30
                } as unknown as DirTree
            ]
        } as unknown as DirTree
    ]
} as unknown as DirTree


describe('calculateFolderSize', () => {

    it('should return sum size of all children', async () => {
        expect(calculateFolderSize(folderStructure)).toBe(90)
    })

})

