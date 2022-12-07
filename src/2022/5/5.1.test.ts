import * as path from "path"

import { rearrangeStacksAndShowTops } from "./5.1"

describe('5.1', () => {

    it('example input', async () => {
        expect(await rearrangeStacksAndShowTops(path.join('src', '2022', '5', 'input_example.txt'))).toBe('CMZ')
    })

    it('input', async () => {
        await rearrangeStacksAndShowTops(path.join('src', '2022', '5', 'input.txt'))
    })
})