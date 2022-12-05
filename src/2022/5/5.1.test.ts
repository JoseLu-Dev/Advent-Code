import * as path from "path"

import { rearrangeStacksAndShowTops } from "./5.1"

describe('should return sum of priorities of repeated items', () => {

    it('example input', async () => {
        expect(await rearrangeStacksAndShowTops(path.join('src', '2022', '5', 'input_example.txt'))).toBe('CMZ')
    })

    it('input', async () => {
        await rearrangeStacksAndShowTops(path.join('src', '2022', '5', 'input.txt'))
    })
})