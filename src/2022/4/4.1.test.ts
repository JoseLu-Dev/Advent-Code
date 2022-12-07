import * as path from "path"

import { getNumberOfPairsFullyContainsOther } from "./4.1"

describe('4.1', () => {

    it('example input', async () => {
        expect(await getNumberOfPairsFullyContainsOther(path.join('src', '2022', '4', 'input_example.txt'))).toBe(2)
    })

    it('input', async () => {
        await getNumberOfPairsFullyContainsOther(path.join('src', '2022', '4', 'input.txt'))
    })
})