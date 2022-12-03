import * as path from "path"

import { getRucksacksPrioritySum } from "./3.1"

describe('should return sum of priorities of repeated items', () => {

    it('example input', async () => {
        expect(await getRucksacksPrioritySum(path.join('src', '2022', '3', 'input_example.txt'))).toBe(157)
    })

    it('input', async () => {
        await getRucksacksPrioritySum(path.join('src', '2022', '3', 'input.txt'))
    })
})