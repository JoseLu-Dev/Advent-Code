import * as path from "path"

import { rearrangeStacksAndShowTopsCrateMover90001 } from "./5.2"

describe('should return sum of priorities of repeated items', () => {

    it('example input', async () => {
        expect(await rearrangeStacksAndShowTopsCrateMover90001(path.join('src', '2022', '5', 'input_example.txt'))).toBe('MCD')
    })

    it('input', async () => {
        await rearrangeStacksAndShowTopsCrateMover90001(path.join('src', '2022', '5', 'input.txt'))
    })
})