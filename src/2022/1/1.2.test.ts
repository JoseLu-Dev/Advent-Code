import * as path from "path"

import { getMostCaloriesOfFirstElves } from "./1.2"

describe('should return calories of the elf with most calories', () => {

    it('example input', async () => {
        expect(await getMostCaloriesOfFirstElves(path.join('src', '2022', '1', 'input_example.txt'), 3)).toBe(45000)
    })

    it('input', async () => {
        await getMostCaloriesOfFirstElves(path.join('src', '2022', '1', 'input.txt'), 3)
    })
})