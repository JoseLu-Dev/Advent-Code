import * as path from "path"

import { getRockPaperScissorsPoints } from "./2.1"

describe('should return total points for the given strategy', () => {

    it('example input', async () => {
        expect(await getRockPaperScissorsPoints(path.join('src', '2022', '2', 'input_example.txt'))).toBe(15)
    })

    it('input', async () => {
        await getRockPaperScissorsPoints(path.join('src', '2022', '2', 'input.txt'))
    })
})