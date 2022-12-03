import * as path from "path"

import { getRockPaperScissorsPointsTopSecretStrategy } from "./2.2"

describe('should return total points for the given strategy', () => {

    it('example input', async () => {
        expect(await getRockPaperScissorsPointsTopSecretStrategy(path.join('src', '2022', '2', 'input_example.txt'))).toBe(12)
    })

    it('input', async () => {
        await getRockPaperScissorsPointsTopSecretStrategy(path.join('src', '2022', '2', 'input.txt'))
    })
})