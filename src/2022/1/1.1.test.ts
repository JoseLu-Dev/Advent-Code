import * as path from "path"

import { getMostCalories } from "./1.1"

describe('should return calories of the elf with most calories', () => {

    it('example input', async () => {
        expect(await getMostCalories(path.join('src', '2022', '1', 'input_example.txt'))).toBe(24000)
    })

    it('input', async () => {
        await getMostCalories(path.join('src', '2022', '1', 'input.txt'))
    })
})