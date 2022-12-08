import * as path from "path"

import { getVisibleTrees, isAtEdge, isVisibleInXAxis, isVisibleInYAxis } from './8.1';

describe('8.1', () => {

    it('example input', async () => {
        expect(await getVisibleTrees(path.join('src', '2022', '8', 'input_example.txt'))).toBe(21)
    })

    it('input', async () => {
        await getVisibleTrees(path.join('src', '2022', '8', 'input.txt'))
    })
})


const treeMatrix = [
    [3, 0, 3, 7, 3],
    [2, 5, 5, 1, 2],
    [6, 5, 3, 3, 2],
    [3, 3, 5, 4, 9],
    [3, 5, 3, 9, 0]
]
describe('isAtEdge', () => {
    it('0 0', () => {
        expect(isAtEdge(treeMatrix, 0, 0)).toBe(true)
    })

    it('4 0', () => {
        expect(isAtEdge(treeMatrix, 4, 0)).toBe(true)
    })

    it('0 4', () => {
        expect(isAtEdge(treeMatrix, 0, 4)).toBe(true)
    })

    it('4 4', () => {
        expect(isAtEdge(treeMatrix, 4, 4)).toBe(true)
    })

    it('3 3', () => {
        expect(isAtEdge(treeMatrix, 3, 3)).toBe(false)
    })

    it('2 1', () => {
        expect(isAtEdge(treeMatrix, 2, 1)).toBe(false)
    })

    it('3 1', () => {
        expect(isAtEdge(treeMatrix, 3, 1)).toBe(false)
    })
})

describe('isVisibleInXAxis', () => {

    it('2, 1 is visible', async () => {
        expect(isVisibleInXAxis(treeMatrix, 2, 1)).toBe(true)
    })

    it('1, 3 is not visible', async () => {
        expect(isVisibleInXAxis(treeMatrix, 1, 3)).toBe(false)
    })

})

describe('isVisibleInYAxis', () => {

    it('2, 1 is visible', async () => {
        expect(isVisibleInYAxis(treeMatrix, 2, 1)).toBe(true)
    })

    it('3, 1 is not visible', async () => {
        expect(isVisibleInYAxis(treeMatrix, 3, 1)).toBe(false)
    })

})