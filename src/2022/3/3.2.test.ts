import * as path from "path"

import { getRucksacksGroupsPrioritySum } from "./3.2"

describe('should return sum of priorities of repeated item per elves groups', () => {

    it('example input', async () => {
        expect(await getRucksacksGroupsPrioritySum(path.join('src', '2022', '3', 'input_example.txt'), 3)).toBe(70)
    })

    it('input', async () => {
        await getRucksacksGroupsPrioritySum(path.join('src', '2022', '3', 'input.txt'), 3)
    })
})