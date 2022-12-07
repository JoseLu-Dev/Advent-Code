import * as path from "path"

import { getMostCalories } from "./1.1"

describe('1.1', () => {

    it('example input', async () => {
        expect(await getMostCalories(path.join('src', '2022', '1', 'input_example.txt'))).toBe(24000)
    })

    it('input', async () => {
        await getMostCalories(path.join('src', '2022', '1', 'input.txt'))
    })
})