import * as path from "path"

import { getNumberOfPairsContainsOther } from "./4.2"

describe('should return sum of priorities of repeated items', () => {

    it('example input', async () => {
        expect(await getNumberOfPairsContainsOther(path.join('src', '2022', '4', 'input_example.txt'))).toBe(4)
    })

    it('input', async () => {
        await getNumberOfPairsContainsOther(path.join('src', '2022', '4', 'input.txt'))
    })
})