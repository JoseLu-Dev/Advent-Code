import { DirTree } from './dirTree';

export function calculateFolderSize(folder: DirTree): number {
    let size = 0

    if (!folder.children)
        return size

    for (const child of folder.children) {
        if (child.isFolder) {
            size += calculateFolderSize(child)
            continue
        }

        if (!child.size)
            throw new Error('File does not have size')

        size += child.size
    }

    return size
}