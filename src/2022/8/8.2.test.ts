import * as path from "path"

import { getHighestScenicScore, xScenicScore, yScenicScore } from './8.2';

describe('8.1', () => {

    it('example input', async () => {
        expect(await getHighestScenicScore(path.join('src', '2022', '8', 'input_example.txt'))).toBe(8)
    })

    it('input', async () => {
        await getHighestScenicScore(path.join('src', '2022', '8', 'input.txt'))
    })
})


const treeMatrix = [
    [3, 0, 3, 7, 3],
    [2, 5, 5, 1, 2],
    [6, 5, 3, 3, 2],
    [3, 3, 5, 4, 9],
    [3, 5, 3, 9, 0]
]

describe('xScenicScore', () => {

    it('2, 1 has 3', async () => {
        expect(xScenicScore(treeMatrix, 2, 1)).toBe(2)
    })

    it('1, 3 has ', async () => {
        expect(xScenicScore(treeMatrix, 1, 3)).toBe(1)
    })

})

describe('yScenicScore', () => {

    it('2, 1 has 2', async () => {
        expect(yScenicScore(treeMatrix, 2, 1)).toBe(2)
    })

    it('3, 1 has 2', async () => {
        expect(yScenicScore(treeMatrix, 3, 1)).toBe(1)
    })

    it('0, 2 has 4', async () => {
        expect(yScenicScore(treeMatrix, 0, 2)).toBe(4)
    })

})