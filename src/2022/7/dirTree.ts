export interface DirTree{
    name: string
    size?: number
    isFolder: boolean

    children?: DirTree[]
    parent: DirTree
}